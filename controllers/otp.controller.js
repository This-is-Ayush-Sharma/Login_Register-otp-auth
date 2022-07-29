const OtpGen = require('../utils/generateOtp');
const mailer = require('../utils/mailer');
const OtpData = require('../models/otp');
exports.showOtpPage = (req,res)=>{
    res.render('Otp')
}

exports.sendOtp = async(req,res)=>{
    let otp = await OtpGen.generate();
    try{
        // await mailer.sendmail({
        //     user:"thisisayush79@gmail.com",
        //     otp
        // })
        // await OtpData.create({
        //     email:"thisisayush79@gmail.com",
        //     otp
        // })
        return res.redirect('/verify');
    }
    catch(error)
    {

    }
    
}