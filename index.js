const express =require ('express')
const urlRouter=require('./routes/url')
const app= express()
const PORT= 67

app.use('/url',urlRouter)

app.listen(PORT,()=>{
    console.log(`App is listening on PORT ${PORT}`)
})