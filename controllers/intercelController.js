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

        res.render('home', {brandList})
    },
    underConstruction: (req,res) => {
        res.render('soon')
    }

}

module.exports = intercelController