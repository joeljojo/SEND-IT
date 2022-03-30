const nodeMailer = require('nodemailer')
const config = require('./db')
const mssql = require('mssql')
const dotenv = require('dotenv').config();

// Create the transporter
const transporter = nodeMailer.createTransport({
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASSWORD
    }
})

async function sendEmail() {
    try {
        const pool = await mssql.connect(config)
        const users = await pool.request().query(`Select * from Users where IsSent = 0`)

        if (users != 0) {
            for (let user of users.recordset) {

                const { id, email, username } = user;


                // Mail options and info
                await transporter.sendMail({
                    from: process.env.MAILER_USER,
                    to: email,
                    subject: `Hello ${username}`,
                    html: `<b> Thanks ${username} for regisering with SEND-IT </b>`,

                });
                try {
                    const pool = await mssql.connect(config)
                    await pool.request().query(`Update Users set IsSent = 1 where id = '${id}'`)

                    console.log("Email sent")
                } catch (err) {
                    console.log(err)
                }
            }

        }

    } catch (e) {
        console.log(e)
    }

}

module.exports = sendEmail