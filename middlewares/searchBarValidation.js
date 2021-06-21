const {body} = require('express-validator')
const productsModel = require('../model/productsModel')

const searchBarValidation = [
    
    body('userValue').custom( (value, {req}) => {
        
        const {userValue} = req.query
        const modelsList = productsModel.getModels()

        const brandsList = productsModel.getBrands()

        if (!modelsList.includes(userValue)) {

            if(!brandsList.includes(userValue)) {
                return false
            }
        }
        
        return true        
    })
    .withMessage('Celular inexistente. Revisa el nombre ingresado o busca debajo entre los celulares disponibles.')


]

module.exports = searchBarValidation