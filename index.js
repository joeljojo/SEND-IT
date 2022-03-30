const express = require('express')
const database = require('./db')
const mssql = require('mssql')
const sendEmail = require('./nodemailer')
const dotenv = require('dotenv').config();
const app = express()

const port = process.env.PORT_NUMBER;

const cron = require('node-cron')
const mailer = require('nodemailer')

cron.schedule('*/1 * * * *', () => {

    sendEmail().catch(console.error)

})


app.listen(port, () => {
    console.log(`Background Services running on port  ${port}`)
})