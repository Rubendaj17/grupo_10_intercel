const express = require('express');
const usersController = require('../controllers/usersController');
const usersRouter = express.Router()

usersRouter.get("/login", usersController.login);

usersRouter.get("/register",usersController.register);

usersRouter.get("/newProduct", usersController.newProduct);

usersRouter.get("/editProduct", usersController.newProduct);

module.exports = usersRouter