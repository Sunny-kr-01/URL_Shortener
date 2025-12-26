const express =require ('express')

const app= express()
const PORT= 67


app.listen(PORT,()=>{
    console.log(`App is listening on PORT ${PORT}`)
})