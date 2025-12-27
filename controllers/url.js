const URL=require('../models/url')
const {nanoid}=require('nanoid');

async function GenerateNEwShortURL(req,res){
    const body=req.body;
    const id=nanoid(8);
    if(!body.url) return res.status(400).json({error : "require url"})
    await URL.create({
        shortID:id,
        redirectURL:body.url,
        clickHistory:[],
    })
    res.json({generatedId:id})
}

async function RedirectSite(req,res){
    const id=req.params.id
    const location= await URL.findOneAndUpdate(
        {
            shortID:id
        },
        {
            $push : {
                clickHistory :{timestamp:Date.now()}
            }
        }
    )
    res.redirect(location.redirectURL)
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