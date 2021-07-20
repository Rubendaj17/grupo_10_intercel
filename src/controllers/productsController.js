const path = require('path');
const productsModel = require('../model/productsModel')
const {validationResult} = require('express-validator')
const db = require('../database/models')




let productController = {
    list: async (req,res)=>{
        // const productList = productsModel.findAll()
        
        const productList = await db.Model.findAll({
            include:['brand']
        })
        
        const brand = 'Todos los Productos'
        res.send(productList)
        // res.render('products/products', {productList, brand})
    },
    adminList: (req,res)=>{
        const productList = productsModel.findAll() 
        const brand = 'Todos los Productos'
        res.render('products/adminList', {productList, brand})
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
    
    search(req,res){
        let errors = validationResult(req)

        if (!errors.isEmpty()){

            const brand = 'Todos los Productos'
            const productList = productsModel.findAll()
            
            if (req.query.userValue == ''){
                res.redirect('/')
            }
            else {
                res.render('products/products', {error: errors.mapped(), productList, brand})
            }
            
            return
        }

        const { userValue } = req.query
        const idDetail = productsModel.findByName(userValue)
        const productList = productsModel.findByBrand(userValue)
        
        if (idDetail){
            const brandList = productsModel.findByBrand(idDetail.brand) 

            const relatedList = productsModel.randomize(brandList,2) 
            
            res.render('products/productDetail', {idDetail, relatedList})
        }
        else if(productList){
            res.render('products/products', {productList, brand:userValue})
        }
        
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

        const imagePath = `/images/cellphones/${req.body.brand}/${req.body.model}/`

        const mainImageUser = req.files.mainImage[0]
        const mainImage = imagePath + mainImageUser.filename        
        
        const imagesUser = req.files.images
        let images = []
        imagesUser.forEach(e => {
            let newImage = imagePath + e.filename
            images.push(newImage)
        })
        
                        
        const data = req.body
        const {id} = req.params;
        
        productsModel.update (data,id,mainImage,images)

        res.redirect('/')
        
       
    },

    destroy(req, res){
        const id = req.params.id;
        productsModel.destroy(id);
        
        res.redirect('/products/list' )
    },
    
}

module.exports = productController