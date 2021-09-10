const { body } = require('express-validator')
const bcrypt = require('bcryptjs')
const { User } = require('../database/models')

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
    .custom( async (value, {req})=> {
        const {email, password} = req.body

        const userFound = await User.findOne({
            where: {email}
        })

        if (userFound){

            const passOK = bcrypt.compareSync(password, userFound.password)

            if (passOK){
                return true
            }

        }
        return Promise.reject ('Usuario o Contraseña incorrecta.')
    })

]

module.exports = validationLoginUser