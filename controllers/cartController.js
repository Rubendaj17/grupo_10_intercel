const path = require('path');

let cartController = {
    list: (req,res)=>{
        res.render('productCart')
    }

}

module.exports = cartController