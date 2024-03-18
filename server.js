//create the server 
import express from "express"; // const express = require('express')
import colors from "colors";
import dotenv from "dotenv"

//config dotenv
dotenv.config()

//rest object 
const app = express()

//rest api
app.get('/',(req,res)=>{
    res.send("<h1>welcome to ecommerce app</h>");
})

//PORT 
const PORT = process.env.PORT || 8000 ;

//Run listen 
app.listen(PORT, ()=> {
    console.log(`server running on ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.white);
})
