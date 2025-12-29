const express =require ('express')
const URL=require('../models/url')
const router = express.Router();

router.get('/',async(req,res)=>{
    if(!req.user) return res.redirect('/login')
    const all_urls=await URL.find({createdby:req.user._id});
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