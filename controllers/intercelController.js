const path = require('path');
const productsModel = require('../model/productsModel')

let intercelController = {
    randomize: (array)=>{
        let finalList = []

       while(finalList.length<4){
            let random = Math.round(Math.random()* (array.length - 1))
            finalList.includes(array[random])? '' : finalList.push(array[random])
        }
        return finalList
    },
    
    home: (req,res) => {
        const brands = productsModel.getBrands()
        const brandList = intercelController.randomize(brands)

        const offers = productsModel.offers();
        const offerList = intercelController.randomize(offers)     

        // solucion temporaria para Mas Vendidos
        const soldProducts = productsModel.findAll();
        const soldProductsList = intercelController.randomize(soldProducts) 
        // console.log(soldProductsList);    

        res.render('home', {brandList, offerList, soldProductsList})
    },

    underConstruction: (req,res) => {
        res.render('soon')
    }

}

module.exports = intercelController