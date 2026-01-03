const express =require ('express')
const URL=require('../models/url');
const { restrictTo } = require('../middlewares/auth');
const router = express.Router();

router.get('/',restrictTo(["NORMAL"]),async(req,res)=>{
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