const mongoose = require('mongoose')
// defining the short url properties..

const urlSchema=new mongoose.Schema({
    shortID:{
        type:String,
        unique:true,
        required:true,
    },
    redirectURL:{
        type:String,
        required:true,
    },
    clickHistory:{
        time:[{timstamp:{ type:number }}]
    },
},
{timestamps:true}
)

const URL=mongoose.model('url',urlSchema);

module.exports = URL;
