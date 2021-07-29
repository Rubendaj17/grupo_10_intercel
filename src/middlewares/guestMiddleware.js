module.exports = (req, res, next)=>{
    //middleware para impedir acceso a usuarios ya logueados
    const userSession = req.session.logged;
    
    if(userSession){
        res.redirect('/users/profile')
        next()
    }else{
        res.redirect('/users/login')
        next();
    }
} 