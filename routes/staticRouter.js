const express =require ('express')
const URL=require('../models/url')
const router = express.Router();

router.get('/',async(req,res)=>{
    const all_urls=await URL.find({});
    return res.render('home',
        {urls:all_urls}
    )
})



module.exports= router;