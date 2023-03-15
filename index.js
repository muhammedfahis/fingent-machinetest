const express = require('express');
const bodyParser= require('body-parser');
const dotenv = require('dotenv');
const indexRouter = require('./routes/index');



const app =  express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded( {limit:'30mb',extended:true}));
app.use('/',indexRouter);



module.exports =app;