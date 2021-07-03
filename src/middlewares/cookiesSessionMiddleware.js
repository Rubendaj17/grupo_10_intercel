  
const usersModel = require('../model/usersModel')

module.exports = (req, res, next) => {

    const userCookie = req.signedCookies.user
    
    if (userCookie) {
        const user = usersModel.findByPk(userCookie)        
        delete user.password

        req.session.logged = user
    }

    next()
}