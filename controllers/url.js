const URL=require('../models/url')
const {nanoid}=require('nanoid');

async function GenerateNEwShortURL(req,res){
    const bosy=req.body;
    const id=nanoid(8);
    if(!body.url) return res.status(400).json({error : "require url"})
    await URL.create({
        shortID:id,
        redirectURL:body.url,
        clickHistory:[],
    })
    res.json({generatedId:id})
}

module.exports={
    GenerateNEwShortURL
}