const path = require('path');

let productController = {
    list: (req,res)=>{
        res.render('products/products')
    },
    detail:(req,res)=>{
        res.render('products/productDetail')
    },
    newProduct: (req,res)=>{
        res.render('products/newProduct')
        //res.sendFile(path.resolve(__dirname,"../views/newProduct.ejs"))
    },
    editProduct (req, res){
        let product={
            brand: "samsung",
            model: "A20",
            color: "blanco",
            price: 576,
            ram: 8,
        }
        res.render('products/editProduct', {'product': product})
    }

}

module.exports = productController