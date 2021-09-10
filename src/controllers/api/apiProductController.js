const db = require('../../database/models');
const { products } = require('./apiController');

let apiProductController = {
    allProducts: async (req,res) => {
        try { 
// calcular total por categoria

            const brandsAll = await db.Brand.findAll({
                include: [{
                    model:db.Model, as:'models', attributes:['model'],
                    include:[{
                        model:db.Cellphone, as:'cellphones', attributes:['id']}]
            }],
                attributes: ['name']
            })

            let countByBrand = {}
            brandsAll.forEach(brand => {
                let cellphonesByBrand = 0
                let models = {}

                brand.models.forEach(model => {
                    cellphonesByBrand = cellphonesByBrand + model.cellphones.length
                    models[model.model] = model.cellphones.length
                })
                countByBrand[brand.name] = {
                        count: cellphonesByBrand,
                        models
                    }
            })
// calcular total productos
            const productsAll = await db.Cellphone.findAndCountAll({
                include: [{
                    model:db.Model, as:'model', attributes:['model','description'],include:[{
                        model:db.Brand, as:'brand', attributes:['name']}
                ]}],
                attributes: ['id','price','offer']
            })
            
            const products = productsAll.rows.map(product => {
                const {model} = product.model
                const {description} = product.model
                const brand = product.model.brand.name
                const {id} = product
                const {price} = product
                const {offer} = product
                
                return {
                    id,
                    brand,
                    model,
                    price,
                    offer,
                    description,
                    'detail': `http://localhost:3000/api/products/${product.id}`,
                    'associations': ['model', 'brand']
                }

            });

            
            res.status(200).json({
                count: productsAll.count,
                countByBrand,
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
    },

    uniqueProduct: async (req,res) => {
        try {

            const id = req.params.id

            let product = await db.Cellphone.findByPk(id,{
                include: [
                    {model:db.Color, as:'color', attributes:['name']},
                    {model:db.Ram, as:'ram', attributes:['storage']},
                    {model:db.Model, as:'model',attributes:['model','description'], include:[{
                        model:db.Brand, as:'brand', attributes:['name','logo']}
                ]}],
                attributes:['id','price', 'offer', 'imageOne','createdAt', 'updatedAt']
            })

            res.status(200).json({
                id: product.id,
                brand: product.model.brand.name,
                model: product.model.model,
                description: product.model.description,
                brandLogo: product.model.brand.logo, 
                price: product.price,
                offer: product.offer,
                ram: product.ram.storage,
                color: product.color.name,
                createdAt: product.createdAt,
                uptdateddAt: product.uptdateddAt,
                imageOne: `http://localhost:3000/images/cellphones/${product.model.brand.name}/${product.model.model}/${product.imageOne}`,
            })
            
        } catch (error) {
            res.status(500).json({
                meta:{
                    status:"error",
                    total: 0
                },
                error:{
                    msg: "No se pudo conectar a la Base de Datos",
                    error
                }
    
            })
        }

    }

   
}

module.exports = apiProductController