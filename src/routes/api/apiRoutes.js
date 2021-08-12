const express = require('express');
const apiController = require('../../controllers/api/apiController');
const apiRouter = express.Router()


apiRouter.get('/search', apiController.searchProduct)

apiRouter.get('/register', apiController.register)

module.exports = apiRouter