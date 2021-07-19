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

    return Cellphone

}