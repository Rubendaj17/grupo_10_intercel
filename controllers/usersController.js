const path = require('path');

let usersController = {
    login: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/login.html"))
    },
    register: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/register.html"))
    },
    newProduct: (req, res)=>{
        res.sendFile(path.resolve(__dirname,"../views/newProduct.html"))
    },
    editProduct: (req, res)=>{
        res.sendFile(path.resolve(__dirname,"../views/editProduct.ejs"))
    },
    editProduct: (req, res)=>{
        let producto={
            modelo: "X",
            descripcion: "blanco",
            precio: 576,

        }

        return res.render('editProduct', {'producto': producto});
    },
    //NO ANDA CON NINGUNA DE LAS 2
}

module.exports = usersController