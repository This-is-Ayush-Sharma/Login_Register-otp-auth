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
            status:"INACTIVE"
        })
        res.render('Register',{
            message:'Account registered.'
        })
    }
    catch(error){
        // console.log("Some error occured");
        res.render('Register',{
            message:'Account already registered. please login!'
        })
    }
}