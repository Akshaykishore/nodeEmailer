const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const mongoose = require('./model/connection');
const app = express();

//view engine setup
app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars');

app.use('/public', express.static(path.join(__dirname, 'public')))

//Body parser middleware
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.render('contact', {
        layout: false,
        });
});

app.post('/send',(req,res)=>{
    const output = `
    <p> TO DO CONSOLIDATION
    <h3> Day Details </h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Phone: ${req.body.phone}</li>
    <li>Email: ${req.body.email}</li>
    <li>Company: ${req.body.company}</li>
    <li>Morning: ${req.body.morning}</li>
    <li>Evening: ${req.body.evening}</li>
    <li>Studies: ${req.body.studies}</li>
    `;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
        user: '', // generated ethereal user
        pass: ''  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"TO DO DETAILS" <akshayvicky96@gmail.com>', // sender address
      to: 'balasubarmani.offical@gmail.com', // list of receivers
      subject: 'TO DO DETAILS', // Subject line
      text: 'Hello', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.render('contact', {msg:'Email has been sent'});
  });

});

app.listen(3000);

