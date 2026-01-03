const express =require ('express')
const URL=require('../models/url');
const { restrictTo } = require('../middlewares/auth');
const router = express.Router();

router.get('/admin/urls',restrictTo(["ADMIN"]),async(req,res)=>{
    const all_urls=await URL.find({});
    return res.render('home',
        {urls:all_urls}
    )
})

router.get('/',restrictTo(["NORMAL","ADMIN"]),async(req,res)=>{
    const all_urls=await URL.find({createdby:req.user.id});
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