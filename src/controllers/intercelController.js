const db = require('../database/models');
const {randomize} = require('../helpers/randomize');


let intercelController = {
    
    home: async (req,res) => {
        try {
            const brandList = await db.Brand.findAll() 
            const brandsRandomize = randomize(brandList,4)
    
            const offerList = await db.Cellphone.findAll({
                include: ['model'],
                group:['id_model'], 
                where:{offer: 1        
                }     
            }) 
    
            const offerRandomize = randomize(offerList, 4)     
    
            const soldCellphones = await db.Model.findAll({
                include: ['cellphones']
            });
            
            // solucion temporaria para Mas Vendidos
            const soldCellRandomize = randomize(soldCellphones,4)         

            res.render('home', {brandsRandomize, offerRandomize, soldCellRandomize})
            
        } catch (error) {
            console.log(error);
            res.status(500).render('soon', {error})            
        }    
        
    },


    underConstruction: (req,res) => {
        res.render('soon')
    }

}

module.exports = intercelController