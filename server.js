// create the server 
const express = require('express')

//rest object 
const app = express()

//rest api
app.get('/',(req,res)=>{
    res.send({
        message:'welcome to ecommerce app'
    })
})

//PORT 
const PORT = 8080

//Run listen 
app.listen(PORT, ()=> {
    console.log(`server running on ${PORT}`)
})