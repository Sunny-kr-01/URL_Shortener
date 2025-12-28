const express =require ('express')
const URL=require('../models/url')
const router = express.Router();

router.get('/',async(req,res)=>{
    const all_urls=await URL.find({});
    return res.render('home',
        {urls:all_urls}
    )
})

router.get('/signup',(req,res)=>{
    res.render('signup');
})
router.get('/login',(req,res)=>{
    res.render('login');
})


module.exports= router;