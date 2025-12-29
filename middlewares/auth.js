const {getUser}=require('../service/auth')

async function restrictToLoggedInUserOnly(req,res,next){
    const userID=req.cookies?.uid;

    if(!userID) return res.redirect('/login')
    const user = getUser(userID);

    if(!user) return res.redirect('/login')
    req.user=user
    next()
}

module.exports={
    restrictToLoggedInUserOnly
}