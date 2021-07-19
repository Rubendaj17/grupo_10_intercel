module.exports = (sequelize, DataTypes) => {
    let alias = 'Category'
    
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING(5),
            unique: true,
            allowNull: false
        }
    }

    let config = {
        tableName: 'categories',
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config)

    return Category

}