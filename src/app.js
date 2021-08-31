const express = require('express');
const path = require('path');
const methodOverride = require('method-override')
const app = express();
const publicPath = path.resolve(__dirname, '../public');
const session = require('express-session');
const cookieParser = require('cookie-parser')
 

app.use(methodOverride('_method'))
app.use(express.static(publicPath));
app.use(session({secret: "Secret Session"}))

app.use(cookieParser("Secret Cookies"))

const cookiesSessionMiddleware = require('./middlewares/cookiesSessionMiddleware')

app.use(cookiesSessionMiddleware)

app.set('view engine','ejs');
app.set('views', path.resolve(__dirname,'views'))

app.listen(process.env.PORT || 3000, function (){
    console.log('Servidor Corriendo')
})

const sessionToLocals = require('./middlewares/sessionToLocalsMiddleware')

// No olvidarse esto para que la data se envie correctamente desde un formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(sessionToLocals);

// generic
const intercelRoutes = require('./routes/intercelRoutes');
app.use("/", intercelRoutes)

// api
const apiRoutes = require('./routes/api/apiRoutes');
app.use("/api", apiRoutes)

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
