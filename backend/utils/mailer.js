import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'fedinabli05@gmail.com',
    pass: 'FediGuit@r2156'
  }
})

const mailOptions = {
  from: 'SMART SECURITY',
  to: 'fedinabli05@gmail.com',
  subject: '[Pi Bot] Intruder alert!',
  html:
  `Mr/Mrs/Miss. Your name ,
  Someone is trying to steal your raspberry pi 3.
  At: `+
  Date()+

  `Love,
  Pi Bot`
}

console.log('Sending mail...')

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Mail sent: ${info.response}`)
  }
})