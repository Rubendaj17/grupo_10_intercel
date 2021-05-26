const path = require('path');

let cartController = {
    list: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/productCart.html"))
    }

}

module.exports = cartController