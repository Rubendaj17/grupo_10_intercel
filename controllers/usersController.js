const path = require('path');

let usersController = {
    login: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/login.html"))
    },
    register: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/register.html"))
    },
    newProduct: (req, res)=>{
        res.sendFile(path.resolve(__dirname,"../views/newProduct.html"))
    },
}

module.exports = usersController