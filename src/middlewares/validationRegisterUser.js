const { body } = require('express-validator')
const bcrypt = require('bcryptjs')
const usersModel = require('../model/usersModel')

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
    .custom((value, {req})=> {
        const {email} = req.body

        const userFound = usersModel.findByField('email', email)

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