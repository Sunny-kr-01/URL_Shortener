const {v4:uuidv4}=require('uuid')
const User =require('../models/user')
const {setUser}=require('../service/auth')
async function UserSignUp(req,res){
    const {name,email,password}=req.body
    await User.create({
        name,
        email,            
        password
    })
    return res.redirect('/login')
}
async function UserLogin(req,res){
    const {email,password}=req.body
    const user=await User.findOne({email,password})
    if(!user) return res.render('login',  
        {error:"Invalid Username or Password"}
    )  // if not return : does'nt handle error
    
    const token=setUser(user);
    res.cookie('uid',token,{
        domain:'.localhost:67'  // cookies valid on every port on localhost:67/example/ex1/ex2
    })
    return res.redirect('/')
}

module.exports={
    UserSignUp,
    UserLogin
}