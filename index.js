const express =require ('express')
const path=require('path')
const urlRouter=require('./routes/url')
const statisRoute=require('./routes/staticRouter')
const userRoute=require('./routes/user')
const {connectMongoose}=require('./connect')
const app= express()
const PORT= 67

app.use(express.urlencoded({extended:false}))

//what view engine we are going to use
app.set ('view engine','ejs')

//aslo give the ejs file location
app.set('views',path.resolve('./views'))

connectMongoose('mongodb://127.0.0.1:27017/Short_URLs')
.then(()=>{console.log("MongoDB connected")})
.catch((err)=>{console.log("Mongo Error")})

app.use('/url',urlRouter)
app.use('/',statisRoute)
app.use('/user',userRoute)
app.listen(PORT,()=>{
    console.log(`App is listening on PORT ${PORT}`)
})