const express = require('express');
const path = require('path');
const methodOverride = require('method-override')

app.use(methodOverride('_method'))

const app = express();
app.set('view engine','ejs')
app.set('views','./views')

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.listen(3001, ()=> {
    console.log('Servidor corriendo');
})

// No olvidarse esto para que la data se envie correctamente desde un formulario
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// generic
const intercelRoutes = require('./routes/intercelRoutes');
app.use("/", intercelRoutes)

//user/
const usersRoutes = require('./routes/usersRoutes');
app.use("/users", usersRoutes)

//products/
const productsRoutes = require('./routes/productsRoutes');
app.use("/products", productsRoutes)

//cart
const cartRoutes = require('./routes/cartRoutes');
app.use("/cart", cartRoutes)
