const URL=require('../models/url')
const {nanoid}=require('nanoid');
const mongoose=require('mongoose')

async function GenerateNEwShortURL(req,res){
    if (!req.user) {
    return res.status(401).send("Login required");
  }
    const body=req.body;
    const id=nanoid(8);
    if(!body.url) return res.status(400).json({error : "require url"})
    await URL.create({
        shortID:id,
        redirectURL:body.url,
        clickHistory:[],
        createdby:new mongoose.Types.ObjectId(req.user.id)
    })
    
    res.render('home',
        {ID:id}
    )
    //res.json({generatedId:id})
}

async function RedirectSite(req,res){
    const shortID=req.params.id
    const location= await URL.findOneAndUpdate(
        {
            shortID
        },
        {
            $push : {
                clickHistory :{timestamp:Date.now()}
            }
        }
    )
    return res.redirect(location.redirectURL)
}

async function showStats(req,res){
    const shortID=req.params.id;
    const stats=await URL.findOne({shortID})
    res.json({clicks : stats.clickHistory.length})
}

module.exports={
    GenerateNEwShortURL,
    RedirectSite,
    showStats
}