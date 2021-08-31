const express = require('express');
const apiController = require('../../controllers/api/apiController');
const apiRouter = express.Router()


apiRouter.get('/search', apiController.searchProduct)

apiRouter.get('/users', apiController.register)

apiRouter.get('/brands', apiController.brands)

apiRouter.get('/products', apiController.products)

module.exports = apiRouter