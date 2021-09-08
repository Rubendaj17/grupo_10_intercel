const db = require('../../database/models');

let apiProductController = {
    allProducts: async (req,res) => {
        // pedir info a BDD
        

        try {
            
            const productsAll = await db.Cellphone.findAndCountAll({
                include: ['model','color','ram'],
                attributes: ['id','price', 'offer']
        })
        let products = []

        productsAll.rows.forEach( product =>{
            let info = {
                'id': product.id,
                'price': product.price,
                'offer': product.offer,
                'model': product.model.model,
                'description': product.model.description,
                'color': product.color.name,
                'ram': product.ram.storage,
                'detail': `http://localhost:3000/api/products/${product.id}`
            }
            products.push(info)
        })

        const models = await db.Model.findAll({
            include: ['cellphones'],    
        })
        
        let countByModel = {}
        models.forEach( model => {
            countByModel[model.model] = model.cellphones.length
        })


            res.status(200).json({
                count: productsAll.count,
                countByModel,
                products: products
            })
            
        } catch (error) {
            res.status(500).json({
                error:{
                    msg: "No se pudo conectar a la Base de Datos",
                    error
                }
    
            })
        }

        





    }
}

module.exports = apiProductController