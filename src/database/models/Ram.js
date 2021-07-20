module.exports = (sequelize, DataTypes) => {

    let alias = 'Ram'
    
    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        storage: {
            type: DataTypes.STRING(15),
            unique: true,
            allowNull: false
        }
    }

    let config = {
        tableName: 'rams',
        timestamps: false
    }

    const Ram = sequelize.define(alias, cols, config)

    return Ram
}