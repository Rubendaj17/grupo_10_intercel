const path = require('path');
const productsModel = require('../model/productsModel')

let productController = {
    list: (req,res)=>{
        const productList = productsModel.findAll() 
        const brand = 'Todos los Productos'
        res.render('products/products', {productList, brand})
    },
    
    brandList: (req, res) => {
        const {brand} = req.params

        const productList = productsModel.findByBrand(brand) 
        
        res.render('products/products', {productList, brand})

    },

    detail:(req,res)=>{
        const {id} = req.params;
        const idDetail = productsModel.findByPk(id)

        res.render('products/productDetail', {idDetail})
    },
    
    newProduct: (req,res)=>{
        res.render('products/newProduct')
    },

    editProduct (req, res){
        const {id} = req.params;
        const idDetail = productsModel.findByPk(id)

        res.render('products/editProduct',{idDetail})
    },
    store(req, res){
        
    }
    
}

module.exports = productController