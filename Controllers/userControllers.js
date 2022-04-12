const express = require("express");
const config = require("../Config/database");
const mssql = require("mssql");
const crypto = require("crypto");
const { uuid } = require("uuidv4");
const { userSchema, addParcelSchema } = require("../Helpers/validator");
const { Console } = require("console");

const router = express();

// Create users
async function createUser(req, res) {
  const { username, fullname, phonenumber, email, password } = req.body;

  // Validation
  try {
    await userSchema.validateAsync({
      username: username,
      fullname: fullname,
      phonenumber: phonenumber,
      password: password,
      email: email,
    });
    //Check if user exists

    const pool = await mssql.connect(config);
    const userExists = await pool
      .request()
      .input("email", mssql.VarChar(255), email)
      .input("username", mssql.VarChar(255), username)
      .execute("checkIfUserExists");

    if (userExists.recordset != 0) {
      console.log("Email or Username already exists");
    } else {
      try {
        const id = uuid();

        //Ecrypt
        const cipher = crypto
          .createHash("sha256")
          .update(password)
          .digest("base64");
        const pool = await mssql.connect(config);
        await pool
          .request()
          .input("id", mssql.VarChar(255), id)
          .input("username", mssql.VarChar(255), username)
          .input("fullname", mssql.VarChar(255), fullname)
          .input("phonenumber", mssql.VarChar(255), phonenumber)
          .input("email", mssql.VarChar(255), email)
          .input("password", mssql.VarChar(255), cipher)
          .execute("createUser");

        res.send("User added successfully!");
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    res.status(400).send({
      success: false,
      message: err.details[0].message,
    });
  }
}

// get users
async function getUsers(req, res) {
  try {
    let pool = await mssql.connect(config);
    let result = await pool.request().execute(`getUsers`);
    res.json(result.recordset);
  } catch (error) {
    console.log(error);
  }
}
// Create Parcel
async function createParcel(req, res) {
  const {
    description,
    sendernumber,
    receivernumber,
    startlocation,
    currentlocation,
    endlocation,
    senderid,
  } = req.body;

  try {
    await addParcelSchema.validateAsync({
      description: description,
      sendernumber: sendernumber,
      receivernumber: receivernumber,
      startlocation: startlocation,
      currentlocation: startlocation,
      endlocation: endlocation,
      senderid: senderid,
    });

    const id = uuid();

    //Ecrypt
    // Validation

    const pool = await mssql.connect(config);
    const result = await pool
      .request()
      .input("id", mssql.VarChar(255), id)
      .input("description", mssql.VarChar(255), description)
      .input("sendernumber", mssql.VarChar(255), sendernumber)
      .input("receivernumber", mssql.VarChar(255), receivernumber)
      .input("startlocation", mssql.VarChar(255), startlocation)
      .input("currentlocation", mssql.VarChar(255), startlocation)
      .input("endlocation", mssql.VarChar(255), endlocation)
      .input("senderid", mssql.VarChar(255), senderid)
      .execute("createParcel");

    // console.log(result);
    if (result.rowsAffected == 1) {
      res.json({ status: true, success: "Parcel Created successfully!" });
      console.log("Created Successfully");
      console.log(result);
    } else {
      res.json({ status: false, error: "Oops An error occured!" });
    }
  } catch (err) {
    console.log(err);
    res.json({ status: false, error: "Oops An error occured!" });
  }
}

// get Parcels
async function getParcels(req, res) {
  const { perPage = 10, page = 1 } = req.query;
  try {
    let pool = await mssql.connect(config);
    let request = await pool.request();
    request = request.input("PerPage", perPage);
    request = request.input("Page", page);
    let result = await request.execute(`getParcels`);

    res.json({ status: true, parcel: result.recordset });
  } catch (error) {
    console.log(error);
  }
}

//get Specific user
async function getSpecificUser(req, res) {
  try {
    const pool = await mssql.connect(config);
    const id = req.params.id;
    const result = await pool
      .request()
      .input("id", mssql.VarChar, id)
      .execute("getAUser");

    res.json(result.recordset);
  } catch (err) {
    console.log(err);
  }
}

//get Specific Parcel
async function getSpecificparcel(req, res) {
  try {
    const pool = await mssql.connect(config);
    const id = req.params.id;
    const result = await pool
      .request()
      .input("id", mssql.VarChar, id)
      .execute("getAParcel");

    res.json(result.recordset);
  } catch (err) {
    console.log(err);
  }
}

//Update User
async function updateUser(req, res) {
  const { username, fullname, phonenumber, email, password } = req.body;
  try {
    // Validation
    await userSchema.validateAsync({
      username: username,
      fullname: fullname,
      email: email,
      password: password,
      phonenumber: phonenumber,
    });

    try {
      const id = req.params.id;
      const cipher = crypto
        .createHash("sha256")
        .update(password)
        .digest("base64");
      const pool = await mssql.connect(config);
      await pool
        .request()
        .input("id", mssql.VarChar(255), id)
        .input("username", mssql.VarChar(255), username)
        .input("fullname", mssql.VarChar(255), fullname)
        .input("phonenumber", mssql.VarChar(255), phonenumber)
        .input("email", mssql.VarChar(255), email)
        .input("password", mssql.VarChar(255), cipher)
        .execute("updateUser");

      res.send("User updated Successfully");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    res.status(400).send({
      success: false,
      message: err.details[0].message,
    });
  }
}

// Update Parcel

async function updateParcel(req, res) {
  try {
    const {
      description,
      sendernumber,
      receivernumber,
      startLocation,
      currentLocation,
      endLocation,
      senderid,
    } = req.body;

    //Ecrypt
    const id = req.params.id;

    const pool = await mssql.connect(config);
    await pool
      .request()
      .input("id", mssql.VarChar(255), id)
      .input("description", mssql.VarChar(255), description)
      .input("sendernumber", mssql.VarChar(255), sendernumber)
      .input("receivernumber", mssql.VarChar(255), receivernumber)
      .input("startlocation", mssql.VarChar(255), startLocation)
      .input("currentlocation", mssql.VarChar(255), currentLocation)
      .input("endlocation", mssql.VarChar(255), endLocation)
      .input("senderid", mssql.VarChar(255), senderid)
      .execute("updateParcel");

    res.send("Parcel updated Successfully");
  } catch (err) {
    console.log(err);
  }
}

//Delete Parcel

async function deleteParcel(req, res) {
  try {
    const id = req.params.id;
    const pool = await mssql.connect(config);
    await pool
      .request()
      .input("id", mssql.VarChar(255), id)
      .execute("deleteParcel");
    console.log("Parcel Deleted Successfully");
  } catch (err) {
    console.log(err);
  }
}

//Delete User

async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const pool = await mssql.connect(config);
    await pool
      .request()
      .input("id", mssql.VarChar(255), id)
      .execute("deleteUser");
    res.send("User Deleted Successfully");
  } catch (err) {
    console.log(err);
  }
}

// Login route
async function userLogin(req, res) {
  try {
    // Get inputs
    const { email, password } = req.body;
    // Encrypt password
    const cipher = crypto
      .createHash("sha256")
      .update(password)
      .digest("base64");
    const pool = await mssql.connect(config);
    const result = await pool
      .request()
      .input("username", mssql.VarChar(255), email)
      .input("password", mssql.VarChar(255), cipher)
      .execute("login");

    if (result.recordset != 0) {
      res.json({
        status: true,
        user: result.recordset[0],
        success: "Login Successfully!",
      });
      console.log("Successful Login");
    } else {
      console.log("Wrong Credentials");
      res.json({ error: "Wrong Login Credentials", status: false });
    }
  } catch (err) {
    res.json({ error: err });
    console.log(err);
  }
}
// Logout route
async function userLogout(req, res) {
  console.log("Logout");
}
//Forgot password route
async function forgotPassword(req, res) {
  console.log("Reset Password");
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
  forgotPassword,
};
