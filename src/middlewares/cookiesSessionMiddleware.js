const {User} = require('../database/models')

module.exports = (req, res, next) => {

    const userCookie = req.signedCookies.user
    
    if (userCookie) {
        
        User.findByPk(userCookie)
        .then(user => {

            delete user.password
            req.session.logged = user

            next();
        })

    } else {
        next();
    }

}