const express = require('express');
const apiController = require('../../controllers/api/apiController');
const apiUserController = require('../../controllers/api/apiUserController');
const apiProductController = require('../../controllers/api/apiProductController');
const apiRouter = express.Router()


apiRouter.get('/search', apiController.searchProduct)

apiRouter.get('/users', apiUserController.allUsers)

apiRouter.get('/users/:id', apiUserController.uniqueUser)

apiRouter.get('/products', apiProductController.allProducts)

// cambiar nombre de ruta para js front Login/register
apiRouter.get('/user', apiController.register)

apiRouter.get('/brands', apiController.brands)

// cambiar nombre de ruta para js front search
apiRouter.get('/product', apiController.products)

module.exports = apiRouter