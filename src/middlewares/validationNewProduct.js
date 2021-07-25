const {body} = require('express-validator')
const {Model, Brand} = require('../database/models')

const validationNewProduct = [
    //validacion nombre marca
    body('brand')
    .notEmpty()
    .withMessage('Debe ingresar una Marca')
    .bail(),
    
    //validacion nombre modelo
    body('model')
    .notEmpty()
    .withMessage('Debe ingresar un Modelo de Celular')
    .bail(),

    //validacion price
    body('price')
    .notEmpty()
    .withMessage('Debe ingresar un Precio')
    .isNumeric()
    .withMessage('Debe ingresar un número')
    .bail(),

    //validacion imagenes
    body('imageOne')
    .isEmpty()
    .withMessage('Debe Ingresar una Imagen')
    .bail(),
    //validacion imagenes
    body('imageTwo')
    .isEmpty()
    .withMessage('Debe Ingresar una Imagen')
    .bail(),
    //validacion imagenes
    body('imageThree')
    .isEmpty()
    .withMessage('Debe Ingresar una Imagen')
    .bail(),

    //validacion logo
    // body('logo')
    // .custom( async (value, {req}) => {
    //     const {brand} = req.body
    //     const ll = req.files
    //     const isBrand = await Brand.findOne({
    //         where: {name:brand}
    //     })

    //     if( !isBrand && !req.files.logo ){
    //         return false
    //         // throw new Error('Debe ingresar una imagen para una nueva Marca')
    //     }
    //     return true
    // })
    // .withMessage('Debe ingresar una imagen para una nueva Marca')
    // .bail(),

    // //validacion imagen Modelo
    // body('modelMainImage')
    // .custom( async (value, {req}) => {
    //     const {model} = req.body
        
    //     const isModel = await Model.findOne({
    //         where: {model}
    //     })

    //     if( !isModel && !req.files.modelMainImage ){
    //         // throw new Error('Debe ingresar una imagen para un nuevo Modelo')
    //         return false
    //     }
    //     return true
    // })
    // .withMessage('Debe ingresar una imagen para un nuevo Modelo')
    // .bail()
]

module.exports = validationNewProduct