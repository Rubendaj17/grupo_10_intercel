const path = require('path');
const productsModel = require('../model/productsModel')

let productController = {
    list: (req,res)=>{
        const productList = productsModel.findAll() 
        const brand = 'Todos los Productos'
        res.render('products/products',{productList, brand})
    },
    
    brandList: (req, res) => {
        const {brand} = req.params

        const productList = productsModel.findByBrand(brand) 
        
        res.render('products/products',{productList, brand})

    },


    detail:(req,res)=>{
        const {id} = req.params;
        const idDetail = productsModel.findByPk(id)

        res.render('products/productDetail', {idDetail})
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