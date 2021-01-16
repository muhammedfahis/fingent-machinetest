const express = require('express');
const bodyParser= require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const tutorRouter = require('./routes/tutor');
const studentRouter = require('./routes/students');



const app =  express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded( {limit:'30mb',extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/tutor',tutorRouter);
app.use('/student',studentRouter);
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'))
})


module.exports =app;