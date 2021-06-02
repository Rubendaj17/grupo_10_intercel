const path = require('path');

let usersController = {
    login: (req,res)=>{
        res.render('login')
    },
    register: (req,res)=>{
        res.render('register')
    },
    newProduct: (req, res)=>{
        res.render('newProduct')
    },
    // editProduct: (req, res)=>{
    //     res.render('editProduct')
    // },
    editProduct: (req, res)=>{
        let product={
            model: "X",
            description: "blanco",
            price: 576,
            high: 8,
            width: 3.9,
        }
        return res.render('editProduct', {product});
    },
}

module.exports = usersController