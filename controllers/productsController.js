const path = require('path');

let productController = {
    list: (req,res)=>{
        res.render('products')
    },

    detail:(req,res)=>{
        res.render('productDetail')
    }

}

module.exports = productController