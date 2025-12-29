const express =require ('express')
const path=require('path')
const cookieParser =require('cookie-parser')
const {connectMongoose}=require('./connect')
const {restrictToLoggedInUserOnly,checkAuth}=require('./middlewares/auth')
const app= express()
const PORT= 67

const urlRouter=require('./routes/url')
const statisRoute=require('./routes/staticRouter')
const userRoute=require('./routes/user')

app.use(cookieParser())

app.use(express.urlencoded({extended:false}))
app.use(express.json())

//what view engine we are going to use
app.set ('view engine','ejs')

//aslo give the ejs file location
app.set('views',path.resolve('./views'))

connectMongoose('mongodb://127.0.0.1:27017/Short_URLs')
.then(()=>{console.log("MongoDB connected")})
.catch((err)=>{console.log("Mongo Error")})

app.use('/url',restrictToLoggedInUserOnly,urlRouter)
app.use('/',checkAuth,statisRoute)
app.use('/user',userRoute)
app.listen(PORT,()=>{
    console.log(`App is listening on PORT ${PORT}`)
})