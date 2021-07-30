module.exports = (req, res, next)=>{
    //middleware permite acceder a usuarios logueados
    const userSession = req.session.logged;
    
    if(userSession){
        next()
    }else{
        res.redirect('/users/login')
        next();
    }
}