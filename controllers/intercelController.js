const path = require('path');
const productsModel = require('../model/productsModel')

let intercelController = {
    // randomize: (array)=>{
    //     let finalList = []

    //    while(finalList.length<4){
    //         let random = Math.round(Math.random()* (array.length - 1))
    //         finalList.includes(array[random])? '' : finalList.push(array[random])
    //     }
    //     return finalList
    // },
    
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