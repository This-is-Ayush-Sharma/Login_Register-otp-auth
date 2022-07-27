const OtpGen = require('../utils/generateOtp');

exports.showOtpPage = (req,res)=>{
    res.render('Otp')
}

exports.sendOtp = (req,res)=>{
    let opt = OtpGen.generate();
    // console.log(req.user);
    // return res.render('/verify');
}