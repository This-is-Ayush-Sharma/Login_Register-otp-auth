const express = require('express');
const app = express();


//Controllers.
const LoginController = require('./controllers/login.controller');
const RegsiterController = require('./controllers/register.controller');
// app status
app.get("/health",(req,res)=>{
    console.log("The Server is up and running");
    res.send("The Server is up and running");
});
app.get('/',(req,res)=>{
    res.render('Login',{
        message:""
    })
})
//Login route.
app.get('/login',LoginController.ShowLoginPage);
app.post('/login',LoginController.ActionLoginPage);

//Register Route
app.get('/register',RegsiterController.ShowRegisterPage);
app.post('/register',RegsiterController.actionRegisterpPage);

module.exports = app