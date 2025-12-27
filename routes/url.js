const express=require('express');
const {GenerateNEwShortURL,RedirectSite}=require('../controllers/url')

const router =express.Router();

router.route('/')
.get((req,res)=>{
    res.send(`
        <h1>URL Shortner</h1>
        `)
})
.post(GenerateNEwShortURL)

router.route('/:id')
.get(RedirectSite)



module.exports=router;