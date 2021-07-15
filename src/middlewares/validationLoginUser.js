const { body } = require('express-validator')
const bcrypt = require('bcryptjs')
const usersModel = require('../model/usersModel')

const validationLoginUser = [
    body('email')
    .notEmpty()
    .withMessage('Ingresar Email, por favor.')
    .bail()
    .isEmail()
    .withMessage('Ingresar Email válido, por favor.')
    .bail(),
    body('password')
    .notEmpty()
    .withMessage('Ingresar Contraseña, por favor.')
    .bail()
    .custom((value, {req})=> {
        const {email, password} = req.body

        const userFound = usersModel.findByField('email', email)

        if (userFound){

            const passOK = bcrypt.compareSync(password, userFound.password)

            if (passOK){
                return true
            }

        }
        return false
    })
    .withMessage('Usuario o Contraseña incorrecta.')

]

module.exports = validationLoginUser