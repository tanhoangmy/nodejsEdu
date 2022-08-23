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
  to: 'nguyengiamy.developer@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email send: ' + info.response);
  }
});
