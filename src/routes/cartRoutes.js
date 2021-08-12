const express = require('express');
const cartController = require('../controllers/cartController');
const cartRouter = express.Router()

cartRouter.get("/productCart", cartController.list)

module.exports = cartRouter