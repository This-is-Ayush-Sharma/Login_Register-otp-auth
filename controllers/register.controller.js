const User = require('../models/user');
const crypt = require('../utils/crypt');

exports.ShowRegisterPage = (req, res) => {
    res.render('Register',{
        message:''
    })
}

exports.actionRegisterpPage = async (req, res) => {
    const { email, number, password } = req.body;
    try{
        await User.create({
            email,
            number,
            password: await crypt.encode(password),
            // password,
            status:"INACTIVE"
        })
        return res.render('login',{
            message:'Account registered.',
            email
        })
    }
    catch(error){
        // console.log("Some error occured");
        return res.render('Register',{
            message:'Account already registered. please login!'
        })
    }
}