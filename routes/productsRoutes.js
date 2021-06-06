const express = require('express');
const productsController = require('../controllers/productsController');
const productsRouter = express.Router()

productsRouter.get("/list", productsController.list)
productsRouter.get("/list/:brand", productsController.brandList)
productsRouter.get("/:id", productsController.detail)

productsRouter.get("/newProduct", productsController.newProduct);
productsRouter.get("/editProduct", productsController.editProduct);


module.exports = productsRouter