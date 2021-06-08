const express = require('express');
const intercelController = require('../controllers/intercelController');
const intercelRouter = express.Router()



intercelRouter.get('/', intercelController.home)
intercelRouter.get('/soon', intercelController.underConstruction)

// app.get("/proximamente", (req,res)=>{
//     res.render('proximamente')
// })





module.exports = intercelRouter