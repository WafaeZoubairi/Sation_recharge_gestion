const express = require('express')
const  {statics}=require('../metiers/bornemetier')
const router = express.Router();
router.post('/statics',statics);
module.exports = router