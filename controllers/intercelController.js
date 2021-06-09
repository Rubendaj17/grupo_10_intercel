const path = require('path');
const productsModel = require('../model/productsModel')

let intercelController = {
    home: (req,res) => {
        const brands = productsModel.getBrands()
        let brandList = []

        for(brandList.length; brandList.length<=3;){
            let random = Math.round(Math.random()* (brands.length - 1))

            brandList.includes(brands[random])? '' : brandList.push(brands[random])
    
        }

        let offer=[]
        const offerAux = productsModel.offers();
        
        while(offer.length<4){
            let random = Math.round(Math.random()* (offerAux.length - 1))
            offer.includes(offerAux[random])? '' : offer.push(offerAux[random])
        }

        
        res.render('home', {brandList, offer})
    },

    underConstruction: (req,res) => {
        res.render('soon')
    }

}

module.exports = intercelController