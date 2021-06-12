const path = require('path');
const productsModel = require('../model/productsModel')

let intercelController = {
    
    home: (req,res) => {
        const brands = productsModel.getBrands()
        const brandList = productsModel.randomize(brands, 4)

        const offers = productsModel.offers();
        const offerList = productsModel.randomize(offers, 4)     

        // solucion temporaria para Mas Vendidos
        const soldProducts = productsModel.findAll();
        const soldProductsList = productsModel.randomize(soldProducts,4) 
        // console.log(soldProductsList);    

        res.render('home', {brandList, offerList, soldProductsList})
    },

    underConstruction: (req,res) => {
        res.render('soon')
    }

}

module.exports = intercelController