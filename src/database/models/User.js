module.exports = (sequelize, DataTypes) => {
    let alias = 'User'

    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        phoneNumber: {
            type: DataTypes.STRING(15),
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true
        },

        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        photo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        idCategory: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
                
        
        createdAt : DataTypes.DATE,
        updatedAt :  DataTypes.DATE,
    }

    let config = {
        tableName: 'users',
        underscored: true,
    }


    const User = sequelize.define(alias, cols, config)

    //Relaciones

    return User

}