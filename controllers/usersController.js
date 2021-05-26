const path = require('path');

let usersController = {
    login: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/login.html"))
    },
    register: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/register.html"))
    },

}

module.exports = usersController