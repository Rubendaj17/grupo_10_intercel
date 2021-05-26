const path = require('path');

let productController = {
    list: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/products.html"))
    },

    detail:(req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/product-detail.html"))
    }

}

module.exports = productController