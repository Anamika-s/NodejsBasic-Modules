const nodemailer = require('nodemailer')

var transporter  = nodemailer.createTransport(
  {
 service:'gmail',
 port:587,
 auth:
 {
  user:'anamika.sawhney22@gmail.com',
  pass:'htxsunchtvuflsbx'
 }

  }

  )

  var mailOptions = {
    from: 'anamika.sawhney22@gmail.com',
    to:'anamika_sawhney@rediffmail.com',
    subject:'This is test message',
    // text :'Hello How are you'
    html: '<h1>Welcome</h1><p>That was easy!</p>'
  }
  transporter.sendMail(mailOptions, (error , info)=>
  {
    if(error) console.log(error)
    else console.log("Mail has been sent ", info.response)
  })