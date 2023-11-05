const express = require('express')
const {verifyCridentials,verifyTokenExistence} =require('../metiers/loginmetiers')
const router = express.Router()


// define the home page route
/*** user reauested  */
/**** 
 1- case : 0 (jwt not in the local storage)
 *  check email 
 * check password 
 *   case :0.0 (email and pass correct)
 * generate jwt 
 * send it to user ( user take to jwt and save it to localstorage)
 *  case 0.1: ( email and pass not exit)
 *    please enter the right credentials
 * 2- case 1 (jwt exist): 
 * direct to home
 * 
 * 
 * *** */
router.post('/verifytoken',verifyTokenExistence);
router.post('/login',verifyCridentials);



module.exports = router

