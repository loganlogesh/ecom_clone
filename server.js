//create the server 
import express from "express"; // const express = require('express')
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

//config dotenv
dotenv.config()

//database config
connectDB

//rest object 
const app = express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//rest api
app.get('/',(req,res)=>{
    res.send("<h1>welcome to ecommerce app</h>");
})

//PORT 
const PORT = process.env.PORT || 8000;

//Run listen 
app.listen(PORT, ()=> {
    console.log(`server running on ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.white);
})
