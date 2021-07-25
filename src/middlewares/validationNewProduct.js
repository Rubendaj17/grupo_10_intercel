const {body} = require('express-validator')
const {Model, Brand} = require('../database/models')

const validationNewProduct = [
    //validacion nombre marca
    body('brand')
    .notEmpty()
    .withMessage('Debe ingresar una Marca')
    .bail()
    .custom( async (value, {req}) => {
        const {brand} = req.body
        const ll = req.files
        const isBrand = await Brand.findOne({
            where: {name:brand}
        })

        if( !isBrand && !req.files.logo ){
            throw new Error('Debe ingresar una imagen para una nueva Marca')
        }
    })
    .bail(),
    
    //validacion nombre modelo
    body('model')
    .notEmpty()
    .withMessage('Debe ingresar un Modelo de Celular')
    .bail()
    .custom( async (value, {req}) => {
        const {model} = req.body
        
        const isModel = await Model.findOne({
            where: {model}
        })

        if( !isModel && !req.files.modelMainImage ){
            throw new Error('Debe ingresar una imagen para un nuevo Modelo')
        }
    })
    .bail(),

    //validacion price
    body('price')
    .notEmpty()
    .withMessage('Debe ingresar un Precio')
    .isNumeric()
    .withMessage('Debe ingresar un número')
    .bail(),

    //validacion imagenes
    body('offer')
    .custom( async (value, {req}) => {
        let i = 0
        if(!req.files.imageOne ){
            i++
        }
        if(!req.files.imageTwo ){
            i++
        }
        if(!req.files.imageThree ){
            i++
        }
        if (i >0){
            throw new Error(`Debe ingresar ${i} imagen/es para el nuevo producto`) 
        }
    })
    

]

module.exports = validationNewProduct