const {body} = require('express-validator')

const validationEditProduct = [
        
    //validacion price
    body('price')
    .notEmpty()
    .withMessage('Debe ingresar un Precio')
    .isNumeric()
    .withMessage('Debe ingresar un número')
    .bail(),

]

module.exports = validationEditProduct