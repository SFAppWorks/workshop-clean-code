const Mailer = {};
const nodemailer = require('nodemailer');
const config = {};
const path = require('path');
const handlebars = require('express-handlebars');
const hbs = require('nodemailer-express-handlebars');

/**
 * Send email using Amazon SES
 *
 * @param {String} [type] Email type to be sent
 * @param {Object} [data] Required info like recipient email, name and the link inside the email
 */

Mailer.send = (type, data) => {
    const options = {
        cancelled: {
            subject: `${data.name} has just cancelled their application`,
            text: `${data.name} has just responded with No on the terms and agreement page 
                    and has chosen to cancel their application.
                    You can contact ${data.name} at ${data.email}.`,
            template: 'cancelled'
        },

        abandoned: {
            subject: `${data.name} has abandoned their application`,
            text: `${data.name} has no activity on their application in the last hour.
                    You can contact ${data.name} at ${data.email}.`,
            template: 'abandoned'
        },

        ppsFailed: {
            subject: `${data.name} has failed submitting to MX ISO`,
            text: `${data.name} application didn't submit.
                    You can contact ${data.name} at ${data.email}.`,
            template: 'pps_failed'
        },

        savePin: {
            subject: `${data.firstName}, your merchant services application has been saved.`, // Subject line
            text: `Hi ${data.firstName}, ` + // plain text body
                'you are almost there! ' +
                'Finish your Application today. ' +
                'Click below to open the application ' +
                `<a href="${data.link}">Resume Application</a>`,
            template: 'save_pin',
        },

        submitted: {
            subject: `${data.firstName}, your merchant services application was completed successfully.`,
            text: 'Your application has been submitted' +
                `<p><a href="${data.link}">View application status</a></p>`,
            template: 'submitted'
        },

        statusChange: {
            subject: `Congratulations ${data.firstName}, and Welcome to the Manson Family.`, // Subject line
            text: `Your Application Status Has Changed, to ${data.newStatus}`, // plain text body
            template: 'status'
        },

        applicationFailed: {
            subject: `${data.firstName}, Your Application Status has Changed.`, // Subject line,
            text: `Your Application Status Has Changed, to ${data.newStatus}`,
            template: 'failure'
        }
    };

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        // host: 'email-smtp.us-west-2.amazonaws.com', // old smtp host
        host: 'email-smtp.us-east-1.amazonaws.com',
        port: 465,
        secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
            user: config.smtp_user,
            pass: config.smtp_password
        }
    });

    // attach the plugin to the nodemailer transporter
    transporter.use('compile', hbs({
        viewEngine: handlebars.create(),
        viewPath: path.resolve(__dirname, './templates'),
        extName: '.hbs'
    }));

    let recipients = data.email;
    let cc = type !== 'savePin' ? 'sales@poorman.com' : '';

    if (type === 'cancelled' || type === 'abandoned') {
        recipients = 'sales@poorman.com';
        cc = '';
    } else if (type === 'ppsFailed') {
        recipients = 'sales@poorman.com';
        cc = '';
    }

    // setup email data with unicode symbols
    const mailOptions = {
        from: '"MyWebsite" <support@website.com>', // sender address
        to: recipients, // list of receivers, can be truly used only after getting out of sandbox
        cc: cc, // cc to sales
        subject: options[type].subject, // Subject line
        text: options[type].text, // plain text body
        template: options[type].template, // template,
        context: { data: data },
        attachments: [{
            filename: 'image.png',
            path: path.resolve(__dirname, './templates/image.png'),
            cid: 'website_logo' // same cid value as in the html img src
        }]
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('\t\t========= message type ', type, '========================');
        console.log('Message %s sent: %s', info.messageId, info.response);
        console.log('\t\t=============================================');
    });
};

module.exports = Mailer;
