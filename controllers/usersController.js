const path = require('path');

let usersController = {
    login: (req,res)=>{
        res.render('login')
    },
    register: (req,res)=>{
        res.render('register')
    },
    newProduct: (req,res)=>{
        res.render('newProduct')
        //res.sendFile(path.resolve(__dirname,"../views/newProduct.ejs"))
    },
    editProduct (req, res){
        let product={
            brand: "samsung",
            model: "A20",
            color: "blanco",
            price: 576,
            ram: 8,
        }
        res.render('editProduct', {'product': product})
    }
}

module.exports = usersController