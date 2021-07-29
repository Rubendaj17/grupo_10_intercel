module.exports = (req, res, next)=>{
    //middleware para impedir acceso a usuarios sin loguearse como admin
    const userSession = req.session.logged;
    
    if(userSession && userSession.idCategory == 1){
        next()
    }else{
        res.redirect('/users/login')
        next();
    }
}