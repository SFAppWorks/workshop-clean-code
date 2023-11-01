class EmailService {
    loadTemplateOption() {
        throw Error('This is not implemented')
    }
    sendEmail() {
        throw Error('This is not implemented')
    }
}

class AmazonEmailService extends EmailService {
    constructor() {
        super()
        this.transporter = nodemailer.createTransport({
            // host: 'email-smtp.us-west-2.amazonaws.com', // old smtp host
            host: 'email-smtp.us-east-1.amazonaws.com',
            port: 465,
            secure: true, // secure:true for port 465, secure:false for port 587
            auth: {
                user: config.smtp_user,
                pass: config.smtp_password
            }
        });
    }

    attachDefaultTemplateEngine() {
        this.transporter.use('compile', hbs({
            viewEngine: handlebars.create(),
            viewPath: path.resolve(__dirname, './templates'),
            extName: '.hbs'
        }));
    }

    loadTemplateOption(templateOptions) {
        this.mailOptions = {
            from: '"MyWebsite" <support@website.com>',
            to: templateOption.recipient,
            cc: templateOption.cc,
            subject: templateOption.subject,
            text: templateOption.text,
            template: templateOption.template,
            context: { data: data },
            attachments: [{
                filename: 'image.png',
                path: path.resolve(__dirname, './templates/image.png'),
                cid: 'website_logo' // same cid value as in the html img src
            }]
        };
    }

    sendEmail () {
        this.transporter.sendMail(this.mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('\t\t========= message type ', type, '========================');
            console.log('Message %s sent: %s', info.messageId, info.response);
            console.log('\t\t=============================================');
        });
    }
}