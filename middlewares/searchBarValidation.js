const {body} = require('express-validator')
const productsModel = require('../model/productsModel')

const searchBarValidation = [
    
    body('userValue').custom( (value, {req}) => {
        
        const {userValue} = req.query
        const modelsList = productsModel.getModels()

        const brandsList = productsModel.getBrands()


        if (!modelsList.includes(userValue)) {

            if(!brandsList.includes(userValue)) {
    
                console.log('validation Brands ',req.query)
                throw new Error ('Celular inexistente');           
            }
        }
        
        return true
        
 
        
    })


]

module.exports = searchBarValidation