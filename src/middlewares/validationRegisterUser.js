const { body } = require('express-validator')
const { User } = require('../database/models')

const validationRegisterUser = [
    body('name')
    .notEmpty()
    .withMessage('Ingresar Nombre, por favor.')
    .bail(),
    
    body('lastName')
    .notEmpty()
    .withMessage('Ingresar Apellido, por favor.')
    .bail(),

    body('email')
    .notEmpty()
    .withMessage('Ingresar Email, por favor.')
    .bail()
    .isEmail()
    .withMessage('Ingresar Email válido, por favor.')    
    .bail()
    .custom( async (value, {req})=> {
        const {email, password} = req.body

        const userFound = await User.findOne({
            where: {email}
        })

        if (userFound){
            return false
        }
        return true
    })
    .withMessage('Usuario existente.'),

    body('password')
    .notEmpty()
    .withMessage('Ingresar Contraseña, por favor.')

]

module.exports = validationRegisterUser