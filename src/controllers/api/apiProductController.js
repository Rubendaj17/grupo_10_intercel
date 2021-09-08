const db = require('../../database/models');

let apiProductController = {
    allProducts: async (req,res) => {
        // pedir info a BDD
        
        const productList = await db.Cellphone.findAndCountAll({
            include: ['model','color','ram',],
            
        })

        const countByModel = await db.Cellphone.findAndCountAll({
            include: ['model','color','ram',],
            group:['model.model']
        })

        let usersToReturn = []

        userList.rows.forEach( u => {

            let infoToReturn = {
                id: u.dataValues.id,
                name: u.dataValues.name,
                email: u.dataValues.email,
                detail: `http://localhost:3000/api/user/${u.dataValues.id}`
            }

            usersToReturn.push(infoToReturn)

        })


        return res.json() 




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

    }
}

module.exports = apiProductController