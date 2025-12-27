const express=require('express');
const {GenerateNEwShortURL,RedirectSite,showStats}=require('../controllers/url')

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

router.get('/analytics/:id',showStats)



module.exports=router;