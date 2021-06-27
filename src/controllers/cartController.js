const path = require('path');

let cartController = {
    list: (req,res)=>{
        res.render('cart/productCart')
    }

}

module.exports = cartController