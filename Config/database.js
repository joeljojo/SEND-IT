const express = require('express')
const mssql = require('mssql');
const dotenv = require('dotenv').config();
const database = express();


// Configure your Database
const config = {
    user: process.env.DB_USER,
    server: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    options: {
        trustServerCertificate: true
    }
}

// Connect to databsee
mssql.connect(config, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Connecting to Database')

    }
})

module.exports = database;