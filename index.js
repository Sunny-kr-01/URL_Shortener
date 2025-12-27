const express =require ('express')
const urlRouter=require('./routes/url')
const {connectMongoose}=require('./connect')
const app= express()
const PORT= 67

app.use(express.urlencoded({extended:false}))

connectMongoose('mongodb://127.0.0.1:27017/Short_URLs')
.then(()=>{console.log("MongoDB connected")})
.catch((err)=>{console.log("Mongo Error")})

app.use('/url',urlRouter)

app.listen(PORT,()=>{
    console.log(`App is listening on PORT ${PORT}`)
})