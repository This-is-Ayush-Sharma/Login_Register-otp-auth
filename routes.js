const express = require('express');
const app = express();


//Controllers.
const LoginController = require('./controllers/login.controller');

// app status
app.get("/health",(req,res)=>{
    console.log("The Server is up and running");
    res.send("The Server is up and running");
});

//Login route.
app.get('/login',LoginController.ShowLoginPage);

module.exports = app