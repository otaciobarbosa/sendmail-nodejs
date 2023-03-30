const nodemailer = require("nodemailer");
require('dotenv').config()

exports.post = (req, res, next) => {
    console.log(req.body.mailfrom)

    const from    = req.body.mailfrom;
    const to      = req.body.mailto;
    const subject = req.body.mailsubject;
    const text    = req.body.mailtext;
    
    const transporter = nodemailer.createTransport({
        
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
        },
        tls: { rejectUnauthorized: true },
    });

    const mailOptions = { from: from,
                          to: to,
                          subject: subject,
                          text: text
                        };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(201).send('Erro ao enviar e-mail '+ error);
        } else {
            res.status(201).send('Requisição recebida com sucesso '+ info.response);
        }
    });
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};