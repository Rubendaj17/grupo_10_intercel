module.exports = (req, res, next)=>{
    const userSession = req.session.logged;
    console.log("hola");
    if(!userSession){
        res.redirect('/users/login')
    }
    next();
}