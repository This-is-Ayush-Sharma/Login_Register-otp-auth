const User = require('../models/user');
const crypt = require('../utils/crypt');
const tokenGen =require('../utils/generateToken');

exports.ShowLoginPage = (req,res)=>{
    console.log(req.headers.cookie);
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
            return res.render('Login',{
                message:'Account not found!'
            })
        }
        if(crypt.decode(user.password,password))
        {
            const token = await tokenGen.genToken(req.body.email);
            // console.log(token);
            res.cookie("token",token);
            return res.redirect('/dashboard');
        }
        else
        {
            return res.render('Login',{
                message:"Invalid email or password."
            })
        }
    }
    catch(error)
    {
        console.log("some error occured");
    }
}