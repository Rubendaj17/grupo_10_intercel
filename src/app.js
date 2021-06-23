const express = require('express');
const path = require('path');
const methodOverride = require('method-override')
const app = express();
const publicPath = path.resolve(__dirname, '../public');

app.use(methodOverride('_method'))
app.use(express.static(publicPath));

app.set('view engine','ejs');
app.set('views', path.resolve(__dirname,'views'))

app.listen(process.env.PORT || 3000, function (){
    console.log('Servidor Corriendo')
})

// No olvidarse esto para que la data se envie correctamente desde un formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
const { appendFile } = require('fs');
app.use("/cart", cartRoutes)
