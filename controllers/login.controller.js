const User = require('../models/user');
const crypt = require('../utils/crypt');

exports.ShowLoginPage = (req,res)=>{
    res.render('Login',{
        message:""
    });
}

exports.ActionLoginPage = async (req,res)=>{
    const {email ,password} = req.body;
    try{
        const user = await User.findOne({email:email})
        if(!user)
        {
            res.render('Login',{
                message:'Account not found!'
            })
        }
        if(crypt.decode(user.password,password))
        {
            res.render('dashboard');
        }
        else
        {
            res.render('Login',{
                message:"Invalid email or password."
            })
        }
    }
    catch(error)
    {
        console.log("some error occured");
    }
}