module.exports = (req, res, next)=>{
    const userSession = req.session.logged;
    console.log(userSession);
    if(!userSession){
        res.redirect('/users/login')
    }
    next();
}