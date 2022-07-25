const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const routes = require('./routes');
const setupDB = require('./config/connectdb');
require('dotenv').config();

app.set("view engine","ejs");

app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use('/',routes);

setupDB.connectDB();

app.get('/',(req,res)=>{
    res.send("fuck off..");
})

app.listen(process.env.PORT,()=>{
    console.log("server is up and listenting.");
})