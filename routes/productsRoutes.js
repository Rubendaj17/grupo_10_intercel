const express = require('express');
const productsController = require('../controllers/productsController');
const productsRouter = express.Router()

productsRouter.get("/list", productsController.list)
productsRouter.get("/productDetail", productsController.detail)

productsRouter.get("/newProduct", productsController.newProduct);
productsRouter.get("/editProduct", productsController.editProduct);


module.exports = productsRouter