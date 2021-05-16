const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3000, ()=> {
    console.log('Servidor corriendo');
})

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get("/product-detail", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/product-detail.html"))
})

app.get("/redes", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/redes.html"))
})

app.get("/login", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})

app.get("/register", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})

app.get("/cart", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/productCart.html"))
})