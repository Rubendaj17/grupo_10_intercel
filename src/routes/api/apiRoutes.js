const express = require('express');
const apiController = require('../../controllers/api/apiController');
const apiUserController = require('../../controllers/api/apiUserController');
const apiRouter = express.Router()


apiRouter.get('/search', apiController.searchProduct)

apiRouter.get('/users', apiUserController.allUsers)

// apiRouter.get('/users/:id', apiController.uniqueUser)

// cambiar nombre de ruta para js front Login/register
apiRouter.get('/user', apiController.register)

apiRouter.get('/brands', apiController.brands)

apiRouter.get('/products', apiController.products)

module.exports = apiRouter