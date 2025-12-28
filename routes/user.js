const express=require('express')
const {UserSignUp}=require('../controllers/user')
const router=express.Router();

router.post('/',UserSignUp)


module.exports=router