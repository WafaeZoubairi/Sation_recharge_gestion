const express = require('express')
const {getCPOBornes,addCPO,updateCPO,deleteCPO,getCPOById,getAllCPO}=require('../metiers/CPOmetier')
const router = express.Router()
router.post('/save',addCPO);
router.post('/update/:id',updateCPO);
router.post('/delete/:id',deleteCPO);
router.post('/get/:id',getCPOById);
router.get('/list',getAllCPO);
router.get('/bornes/:id',getCPOBornes);
module.exports = router

