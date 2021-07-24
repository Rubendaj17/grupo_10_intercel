const {body} = require('express-validator')

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

]

module.exports = validationNewProduct