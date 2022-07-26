const mongoose = require('mongoose');

const UserData = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    number:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('UserData',UserData);