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
            return Promise.reject ('Usuario existente.')
        }
        return true
    }),

    body('password')
    .notEmpty()
    .withMessage('Ingresar Contraseña, por favor.'),

    body('phoneNumber')
    .notEmpty()
    .withMessage('Ingresar Teléfono, por favor.')


]

module.exports = validationRegisterUser