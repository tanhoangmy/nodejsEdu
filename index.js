let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nguyenducmy393@gmail.com',
    pass: 'fcjuibakorzrfvwi',
  },
});

let mailOptions = {
  from: 'tanhoangmy.giamy@gmail.com',
  to: 'nguyengiamy.developer@gmail.com, nguyenducmy393@gmail.com',
  subject: 'This is just mail testing',
  text: 'Mutipage account management!',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email send: ' + info.response);
  }
});
