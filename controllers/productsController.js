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
        const imagePath = `/images/cellphones/${req.body.brand}/${req.body.model}/`

        const mainImageUser = req.files.mainImage[0]
        const mainImage = imagePath + mainImageUser.filename        
        
        const imagesUser = req.files.images
        let images = []
        imagesUser.forEach(e => {
            let newImage = imagePath + e.filename
            images.push(newImage)
        })
        
        const newProduct = {
            ...req.body,
            mainImage,
            images
    }

        productsModel.storeNew(newProduct)
        
        res.redirect('/products/list')
    },

    editProductForm (req, res){
        const {id} = req.params;
        const idDetail = productsModel.findByPk(id)
    
        res.render('products/editProduct',{idDetail})
    },
    

    updateProduct (req,res){
        console.log('Hola controlador')
        const data = req.body
        const {id} = req.params;
        
        productsModel.update (data,id)

        res.redirect('/')
        
        console.log(data)
    },

    destroy(req, res){
        const id = req.params.id;
        productsModel.destroy(id);
        //res.render('products/list');
        res.redirect('/products/list' )
    },
    
}

module.exports = productController