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
    clickHistory:[{timestamp:{ type:Number }}],
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
},
{timestamps:true}
)

const URL=mongoose.model('urls',urlSchema);

module.exports = URL;
