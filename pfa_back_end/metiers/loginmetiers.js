const express = require("express");
const mysql = require("mysql");
const db = require("../database/connection");
const jwt = require("jsonwebtoken");
const app = express();
const uuid = require("uuid");



/*** a function to ckeck if my user is in db* */
let verifyUserIfExistInDB = async (email, password) => {
  let queryString =
    "SELECT email,password,id,role FROM user where email =" + mysql.escape(email)+"and password ="+mysql.escape(password);
  const [user] = await db.query(queryString).catch((err) => {
    throw err;
  });
  return user;
};
/****  authentification fonction */
let verifyCridentials = async (req, res) => {
  /**** first thing verify email and password in db *** */
    console.log(req.body)
  let email = req.body.email;
  let password = req.body.password;

  /**** */
  let user= await verifyUserIfExistInDB(email, password);
  //let roles =req.roles;

  if (!user) {
    return res.status(401).send({ message: "invalid credentials" });
  }

  const accessToken = jwt.sign(
    { userID: user.id, UserRole: user.role },
    process.env.ACESS_SECRET,
    { expiresIn: "1d" }
  );
  const random = uuid.v4();
  const refreshToken = jwt.sign(
    { userID: user.id, refreshTokenID: random },
    process.env.REFRESH_SECRET,
    { expiresIn: "7d" }
  );

  // to calculate the expiration date
  const now = new Date();
  const accessExpiredAt = new Date(now.getTime() + 15 * 60 * 1000); // 30s from now
  const refreshExpiredAt = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days from now

  const responseObj = {
    access_token: {
      token: accessToken,
      expire_at: accessExpiredAt.toISOString(),
    },
    refresh_token: {
      token: refreshToken,
      expire_at: refreshExpiredAt.toISOString(),
    },
    user,
  };
   res.json(responseObj);
};
//   --------------------- function to get the user authorised ---------------------
let verifyTokenExistence = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  let valid;
  try {
    valid = jwt.verify(token, process.env.ACESS_SECRET);
    console.log(valid);
    return res.json({
      id: valid.userID,
      role: valid.UserRole,
    });
  } catch (err) {
    res.status(401).send({ message: "user not authorised" });
  }
};

module.exports = { verifyCridentials, verifyTokenExistence };
