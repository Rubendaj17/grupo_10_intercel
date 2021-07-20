module.exports = (sequelize, DataTypes) => {
    let alias = 'Category'
    
    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
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

    //Relaciones
    
    Category.associate = (models) => {
        Category.hasMany(models.User, {
            as: "users",
            foreignKey: "id_category"
        })
    }

    return Category

}