const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.listen(3000, ()=> {
    console.log('Servidor corriendo');
})

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get("/proximamente", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/proximamente.html"))
})

const usersRoutes = require('./routes/usersRoutes');
//user/
app.use("/users", usersRoutes)

//products/
const productsRoutes = require('./routes/productsRoutes');
app.use("/products", productsRoutes)

//cart
const cartRoutes = require('./routes/cartRoutes');
app.use("/cart", cartRoutes)
