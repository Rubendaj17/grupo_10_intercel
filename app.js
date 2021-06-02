const express = require('express');
const path = require('path');

const app = express();
app.set('view engine','ejs')
app.set('views','./views')

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.listen(4044, ()=> {
    console.log('Servidor corriendo');
})

app.get('/', (req, res)=>{
    res.render('home')
})

app.get("/proximamente", (req,res)=>{
    res.render('proximamente')
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
