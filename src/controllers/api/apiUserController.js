const db = require('../../database/models');


let apiUserController = {
    allUsers: async (req,res) => {
        // pedir info a BDD
        
        const userList = await db.User.findAndCountAll()

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

    },

    uniqueUser: async (req,res) => {
        const id = req.params.id

        
        let user = await db.User.findByPk(id,{
            attributes: ["id","name","lastName", "phoneNumber", "email", "photo", "createdAt", "updatedAt"]
        })

        user.photo = `http://localhost:3000${user.photo}`

        try {

            res.status(200).json({
                users: user
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

module.exports = apiUserController