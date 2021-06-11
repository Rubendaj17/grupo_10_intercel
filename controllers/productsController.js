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
    
    newProductForm: (req,res)=>{
        res.render('products/newProduct')
    },

    editProductForm (req, res){
        const {id} = req.params;
        const idDetail = productsModel.findByPk(id)
        // const pedido = req.body
        // console.log(id, pedido);
        res.render('products/editProduct',{idDetail})
    },

    editProduct (req, res){
        const {id} = req.params;
        // const idDetail = productsModel.findByPk(id)
        const pedido = req.body
        console.log(id, pedido);
        res.redirect('/')
    },

    createNewProduct(req, res){
        const newProduct = req.body

        productsModel.storeNew(newProduct)


        res.redirect('/products/list')
    }
    
}

module.exports = productController