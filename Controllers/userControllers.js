const express = require('express')
const config = require('../Config/database')
const mssql = require('mssql')
const crypto = require('crypto')
const { uuid } = require('uuidv4');
const userSchema = require('../Helpers/validator')

const router = express()

// Create users
async function createUser(req, res) {
    const { username, fullname, phonenumber, email, password } = req.body;
    // Validation
    try {
        await userSchema.validateAsync({ username: username, fullname: fullname, phonenumber: phonenumber, password: password, email: email })
            //Check if user exists


        try {
            const id = uuid();

            //Ecrypt
            const cipher = crypto.createHash("sha256").update(password).digest("base64");
            const pool = await mssql.connect(config)
            await pool.request()
                .input('id', mssql.VarChar(255), id)
                .input('username', mssql.VarChar(255), username)
                .input('fullname', mssql.VarChar(255), fullname)
                .input('phonenumber', mssql.VarChar(255), phonenumber)
                .input('email', mssql.VarChar(255), email)
                .input('password', mssql.VarChar(255), cipher)
                .execute('createUser')

            res.send('User added successfully!')
        } catch (err) {
            console.log(err)
        }

    } catch (err) {
        res.status(400).send({
            success: false,
            message: err.details[0].message

        })

    }

}

// get users
async function getUsers(req, res) {
    try {
        let pool = await mssql.connect(config)
        let result = await pool.request()
            .execute(`getUsers`)
        res.json(result.recordset)

    } catch (error) {
        console.log(error)
    }
}
// Create Parcel
async function createParcel(req, res) {
    try {
        const { description, sendernumber, receivernumber, startlocation, currentlocation, endlocation, senderid } = req.body

        const id = uuid();

        //Ecrypt

        const pool = await mssql.connect(config)
        await pool.request()
            .input('id', mssql.VarChar(255), id)
            .input('description', mssql.VarChar(255), description)
            .input('sendernumber', mssql.VarChar(255), sendernumber)
            .input('receivernumber', mssql.VarChar(255), receivernumber)
            .input('startlocation', mssql.VarChar(255), startlocation)
            .input('currentlocation', mssql.VarChar(255), currentlocation)
            .input('endlocation', mssql.VarChar(255), endlocation)
            .input('senderid', mssql.VarChar(255), senderid)
            .execute('createParcel')

        res.send('Parcel Created successfully!')
    } catch (err) {
        console.log(err)
    }
}


// get Parcels
async function getParcels(req, res) {
    try {
        let pool = await mssql.connect(config)
        let result = await pool.request()
            .execute(`getParcels`)
        res.json(result.recordset)

    } catch (error) {
        console.log(error)
    }
}

//get Specific user
async function getSpecificUser(req, res) {
    try {
        const pool = await mssql.connect(config)
        const id = req.params.id
        const result = await pool.request()
            .input('id', mssql.VarChar, id)
            .execute('getAUser')

        res.json(result.recordset)


    } catch (err) {
        console.log(err)
    }
}

//get Specific Parcel
async function getSpecificparcel(req, res) {
    try {
        const pool = await mssql.connect(config)
        const id = req.params.id
        const result = await pool.request()
            .input('id', mssql.VarChar, id)
            .execute('getAParcel')

        res.json(result.recordset)


    } catch (err) {
        console.log(err)
    }
}

//Update User
async function updateUser(req, res) {
    const { username, fullname, phonenumber, email, password } = req.body
    try {
        // Validation
        await userSchema.validateAsync({ username: username, fullname: fullname, email: email, password: password, phonenumber: phonenumber })

        try {

            const id = req.params.id
            const cipher = crypto.createHash("sha256").update(password).digest("base64");
            const pool = await mssql.connect(config)
            await pool.request()
                .input('id', mssql.VarChar(255), id)
                .input('username', mssql.VarChar(255), username)
                .input('fullname', mssql.VarChar(255), fullname)
                .input('phonenumber', mssql.VarChar(255), phonenumber)
                .input('email', mssql.VarChar(255), email)
                .input('password', mssql.VarChar(255), cipher)
                .execute('updateUser')

            res.send('User updated Successfully')

        } catch (err) {
            console.log(err)
        }

    } catch (err) {
        res.status(400).send({
            success: false,
            message: err.details[0].message
        })
    }

}

// Update Parcel

async function updateParcel(req, res) {
    try {
        const { description, sendernumber, receivernumber, startLocation, currentLocation, endLocation, senderid } = req.body

        //Ecrypt
        const id = req.params.id

        const pool = await mssql.connect(config)
        await pool.request()
            .input('id', mssql.VarChar(255), id)
            .input('description', mssql.VarChar(255), description)
            .input('sendernumber', mssql.VarChar(255), sendernumber)
            .input('receivernumber', mssql.VarChar(255), receivernumber)
            .input('startlocation', mssql.VarChar(255), startLocation)
            .input('currentlocation', mssql.VarChar(255), currentLocation)
            .input('endlocation', mssql.VarChar(255), endLocation)
            .input('senderid', mssql.VarChar(255), senderid)
            .execute('updateParcel')
            // await pool.request().query(`EXEC UpdateUSer @id= ${id}, @email = '${email}', @password = '${password}'`)
        res.send('Parcel updated Successfully')

    } catch (err) {
        console.log(err)
    }
}

//Delete Parcel

async function deleteParcel(req, res) {
    try {
        const id = req.params.id
        const pool = await mssql.connect(config)
        await pool.request()
            .input('id', mssql.VarChar(255), id)
            .execute('deleteParcel')
        res.send('Parcel Deleted Successfully')

    } catch (err) {
        console.log(err)
    }
}

//Delete User

async function deleteUser(req, res) {
    try {
        const id = req.params.id
        const pool = await mssql.connect(config)
        await pool.request()
            .input('id', mssql.VarChar(255), id)
            .execute('deleteUser')
        res.send('User Deleted Successfully')

    } catch (err) {
        console.log(err)
    }
}

// Login route
async function userLogin(req, res) {
    console.log("Login")
}
// Logout route
async function userLogout(req, res) {
    console.log("Logout")
}
//Forgot password route
async function forgotPassword(req, res) {
    console.log("Reset Password")
}
module.exports = {
    getUsers,
    createUser,
    createParcel,
    getParcels,
    getSpecificUser,
    getSpecificparcel,
    updateUser,
    updateParcel,
    deleteParcel,
    deleteUser,
    userLogin,
    userLogout,
    forgotPassword
}