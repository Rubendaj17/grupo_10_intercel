const { Op } = require('sequelize');
const db = require('../../database/models');
const { detail } = require('../productsController');

let apiUserController = {
    allUsers: async (req,res) => {
        // pedir info a BDD
        
        const userList = await db.User.findAndCountAll()

        let usersToReturn = []

        userList.rows.map( u => {

            let infoToReturn = {
                id: u.dataValues.id,
                name: u.dataValues.name,
                email: u.dataValues.email,
                detail: `http://localhost:3000/api/user/${u.dataValues.id}`
            }

            usersToReturn.push(infoToReturn)

        })


        try {
            
            // console.log(usersToReturn);

            res.status(200).json({
                count: userList.count,
                users: usersToReturn
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


        // id
        // name
        // email

        // detail

        // lastName
        // phoneNumber
        // photo
        // pass

        // armar Obj a devolver




    },






    searchProduct: async (req,res) => {
        //setea stringQuery "userSearch="
        const { userSearch } = req.query;
        
        try {
            
            //busca los modelos en la Base de Datos que coincidan con la búsqueda del Usuario
            const modelList = await db.Model.findAndCountAll({
                where: {
                    model: {
                        [Op.like]: `%${userSearch}%`
                    }
                },
                order: [['model', 'ASC']]
            })
            
            //busca las marcas en la Base de Datos que coincidan con la búsqueda del Usuario
            const brandList = await db.Brand.findAndCountAll({
                where: {
                    name: {
                        [Op.like]: `%${userSearch}%`
                    }
                },
                order: [['name', 'ASC']]
            })
            
            //arma el objeto de respuesta juntando la info de la BdD
            const searchResults = {
                count: modelList.count + brandList.count,
                rows: [...brandList.rows, ...modelList.rows]
            }
            
            //arma el json de respuesta (status y numero total + info)
            res.status(200).json({
                meta:{
                    status:"success",
                    total: searchResults.count
                },
                data: searchResults.rows
                
                
            })
            
        //arma el json de error (status y numero total + mensaje error)
        } catch (error) {
            // console.log(error);
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
        //setea stringQuery "email="
        const { email } = req.query;
        
        try {
            //busca el mail en la Base de Datos
            const userList = await db.User.findAndCountAll({
                where: { email }
            })
            //arma el json de respuesta (status y numero total + info)
            res.status(200).json({
                meta:{
                    status:"success",
                    total: userList.count
                },
                data: userList.rows
                
                
            })
            
        //arma el json de error (status y numero total + mensaje error)
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
    brands: async (req,res) => {
        const { brand } = req.query
    
        try {
            //busca las marcas en la Base de Datos que coincidan con la búsqueda del Usuario
            const brandList = await db.Brand.findAndCountAll({
                where: {
                    name: {
                        [Op.like]: `%${brand}%`
                    }
                },
                order: [['name', 'ASC']]
            })

            //arma el json de respuesta (status y numero total + info)
            res.status(200).json({
                meta:{
                    status:"success",
                    total: brandList.count
                },
                data: brandList.rows
                
                
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

    products: async (req,res) => {
        const { product } = req.query
    
        try {
            //busca los modelos en la Base de Datos que coincidan con la búsqueda del Usuario
            const modelList = await db.Model.findAndCountAll({
                where: {
                    model: {
                        [Op.like]: `%${product}%`
                    }
                },
                order: [['model', 'ASC']]
            })

            //arma el json de respuesta (status y numero total + info)
            res.status(200).json({
                meta:{
                    status:"success",
                    total: modelList.count
                },
                data: modelList.rows
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



}

module.exports = apiUserController