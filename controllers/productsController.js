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
        const {id} = req.params
        
        const idDetail = productsModel.findByPk(id)
        const brandList = productsModel.findByBrand(idDetail.brand) 
        const relatedList = productsModel.randomize(brandList,2) 
        

        res.render('products/productDetail', {idDetail, relatedList})
    },
    
    newProductForm: (req,res)=>{
        res.render('products/newProduct')
    },
    createNewProduct(req, res){
        const newProduct = req.body

        productsModel.storeNew(newProduct)


        res.redirect('/products/list')
    },

    editProductForm (req, res){
        const {id} = req.params;
        const idDetail = productsModel.findByPk(id)
    
        res.render('products/editProduct',{idDetail})
    },

    editProduct (req, res){
        const {id} = req.params;
        // const idDetail = productsModel.findByPk(id)
        const pedido = req.body
        console.log(id, pedido);
        res.redirect('/')
    },


    
}

module.exports = productController