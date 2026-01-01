const {getUser}=require('../service/auth')

async function restrictToLoggedInUserOnly(req,res,next){
    // const userID=req.cookies?.uid;
    const userID=req.headers.authorization; // so now we got the token whcih we stored as uid 

    if(!userID) return res.redirect('/login')
    const token=userID.split(' ')[1];//split convert it into array [0]th is pace (" ") probably
    const user = getUser(token);

    if(!user) return res.redirect('/login')
    req.user=user
    next()
}
async function checkAuth(req,res,next){
    // const userID=req.cookies?.uid;
    const userID=req.headers.authorization;
    if (!userID) {
    req.user = null;
    return next();
    }
    const token = userID.split(' ')[1];
    const user = getUser(token);

    req.user=user
    next()
}



module.exports={
    restrictToLoggedInUserOnly,
    checkAuth
}