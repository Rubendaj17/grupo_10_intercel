module.exports = (sequelize, DataTypes) => {
    let alias = 'Cellphone'

    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        idModel: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
 
        idColor: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        
        idRam: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        
        price: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        
        offer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        
        imageOne: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        imageTwo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        
        imageThree: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        
        createdAt : DataTypes.DATE,
        updatedAt :  DataTypes.DATE,
    }

    let config = {
        tableName: 'cellphones',
        underscored: true,
    }


    const Cellphone = sequelize.define(alias, cols, config)

    //Relaciones
    Cellphone.associate = (models) => {
        Cellphone.belongsTo(models.Color, {
            as: "color",
            foreignKey: "id_color"
        }),

        Cellphone.belongsTo(models.Ram, {
            as: "ram",
            foreignKey: "id_ram"
        }),

        Cellphone.belongsTo(models.Model, {
            as: "model",
            foreignKey: "id_model"
        })
    }

    return Cellphone

}