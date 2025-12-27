const express=require('express');
const {GenerateNEwShortURL,RedirectSite,showStats}=require('../controllers/url')

const router =express.Router();

router.post('/',GenerateNEwShortURL)

router.route('/:id')
.get(RedirectSite)

router.get('/analytics/:id',showStats)



module.exports=router;