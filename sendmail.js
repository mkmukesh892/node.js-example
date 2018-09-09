var nodemailer = require('nodemailer');
var http=require('http');
var re= http.createServer(function(req,res){
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mkmukeshkumar892@gmail.com',
    pass: '7717785837'
  }
});

var mailOptions = {
  from: 'mkmukeshkumar892@gmail.com',
    to: 'mkmukeshkumar892@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}).listen(8085);