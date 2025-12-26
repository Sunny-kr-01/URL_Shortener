const express=require('express');
const {GenerateNEwShortURL}=require('../controllers/url')

const router =express.Router();

router.route('/')
.get(()=>{

})
.post('/',GenerateNEwShortURL)

module.exports=router;