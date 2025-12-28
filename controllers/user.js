const User =require('../models/user')

async function UserSignUp(req,res){
    const {name,email,password}=req.body
    await User.create({
        name,
        email,
        password
    })
    return res.redirect('/')
}
async function UserLogin(req,res){
    const {email,password}=req.body
    const user=await User.findOne({email,password})
    if(!user) return res.render('login',  // if not return : does'nt hamdle error
        {error:"Invalid Username or Password"}
    )
    return res.redirect('/')
}

module.exports={
    UserSignUp,
    UserLogin
}