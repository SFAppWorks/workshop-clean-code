const Mailer = {};
const nodemailer = require('nodemailer');
const config = {};
const path = require('path');
const handlebars = require('express-handlebars');
const hbs = require('nodemailer-express-handlebars');


const templates = require('./mailing')

Mailer.send = (data, templateName) => {
    const templateOption = templates[templateName](data)
    const emailService = new AmazonEmailService()
    emailService.loadTemplateOption(templateOption)
    emailService.sendEmail()
};

module.exports = Mailer;
