const crypt = require('bcrypt');


exports.encode = (password)=>{
    return crypt.hash(password,5);
}

exports.decode = (hash,password)=>{
    return crypt.compare(hash,password);
}
