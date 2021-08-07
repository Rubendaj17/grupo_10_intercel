const path = require('path');
const productsModel = require('../model/productsModel')
const db = require('../database/models');
const {randomize} = require('../helpers/randomize');
const { group } = require('console');

let intercelController = {
    
    home: async (req,res) => {
        const brandList = await db.Brand.findAll() 
        const brandsRandomize = randomize(brandList,4)

        const offerList = await db.Cellphone.findAll({
            include: ['model'],
            group:['id_model'], 
            where:{offer: 1        
            }     
        }) 

        const offerRandomize = randomize(offerList, 4)     

        // solucion temporaria para Mas Vendidos
        const soldCellphones = await db.Cellphone.findAll({
            include: ['model']
        });
        
        const soldCellRandomize = randomize(soldCellphones,4)         

        res.render('home', {brandsRandomize, offerRandomize, soldCellRandomize})
    },

    underConstruction: (req,res) => {
        res.render('soon')
    }

}

module.exports = intercelController