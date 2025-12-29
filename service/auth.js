const jwt = require('jsonwebtoken')
const secret= 'Thunder@0101$*'

function setUser(user){
    const payload ={
        id:user._id,
        email:user.email
    }
    return jwt.sign(payload,secret)
}

function getUser(token){
    if(!token) return null
    try{
        return jwt.verify(token,secret)
    }
    catch{
        return null
    }
}

module.exports={
    setUser,
    getUser
}