const {body} = require('express-validator')
const { isFileImage } = require('../helpers/file')

const validationEditProduct = [
        
    //validacion price
    body('price')
        .notEmpty()
        .withMessage('Debe ingresar un precio')
        .isNumeric()
        .withMessage('Debe ingresar un número')
        .bail(), 
    
    body('imageTwo')
        .custom((value,{ req }) =>{
            const { file } = req
        
            if(!file){
                throw new Error ("Por favor ingrese una imagen")
            }
        
        
            return true
        })
]

module.exports = validationEditProduct