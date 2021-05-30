const path = require('path');

let usersController = {
    login: (req,res)=>{
        res.render('login')
    },
    register: (req,res)=>{
        res.render('register')
    },
    newProduct: (req, res)=>{
        res.sendFile(path.resolve(__dirname,"../views/newProduct.html"))
    },
    editProduct: (req, res)=>{
        res.sendFile(path.resolve(__dirname,"../views/editProduct.ejs"))
    },
    editProduct: (req, res)=>{
        let product={
            model: "X",
            description: "blanco",
            price: 576,
            high: 8,
            width: 3.9,
        }
        return res.render('editProduct', {'product': product});
    },
}

module.exports = usersController