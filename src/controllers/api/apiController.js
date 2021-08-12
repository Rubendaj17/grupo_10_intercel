const { Op } = require('sequelize');
const db = require('../../database/models');

let apiController = {
    searchProduct: async (req,res) => {
        const { userSearch } = req.query;
        
        try {
            const modelList = await db.Model.findAndCountAll({
                where: {
                    model: {
                        [Op.like]: `%${userSearch}%`
                    }
                }
            })
            
            const brandList = await db.Brand.findAndCountAll({
                where: {
                    name: {
                        [Op.like]: `%${userSearch}%`
                    }
                }
            })
    
            const searchResults = {
                count: modelList.count + brandList.count,
                rows: [...brandList.rows, ...modelList.rows]
            }
    
            res.status(200).json({
                meta:{
                    status:"success",
                    total: searchResults.count
                },
                data: searchResults.rows
                
    
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


    },

    register: async (req,res) => {

        const { email } = req.query;
        
        try {
            const userList = await db.User.findAndCountAll({
                where: { email }
            })
        
            res.status(200).json({
                meta:{
                    status:"success",
                    total: userList.count
                },
                data: userList.rows
                
    
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

module.exports = apiController