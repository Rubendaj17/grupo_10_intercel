module.exports = (req, res, next)=>{
    //middleware permite acceder a usuarios sin loguearse
    const userSession = req.session.logged;

    if(userSession){
        res.redirect('/users/profile')
        next()
    }
    next();
    
} 