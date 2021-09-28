import nodemailer from 'nodemailer'

export class MailerService {

  async sendMessage():Promise<any> {
    let testAccount = await nodemailer.createTestAccount()
    console.log("testAcc", testAccount)

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    })

    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <lidzhi.otyrov@gmail.com>', // sender address
      to: "lidji.otyrov@gmail.com, lidji.ot@justiceteam-it.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    })

    console.log("Message sent: %s", info.messageId)
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))

    return info
  }
}