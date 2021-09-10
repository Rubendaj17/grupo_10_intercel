module.exports = (sequelize, DataTypes) => {
    
    let alias = 'Brand'


    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        name: {
            type: DataTypes.STRING(45),
            unique: true,
            allowNull: false
        },

        logo: {
            type: DataTypes.STRING(45),
            unique: true,
            allowNull: false
        }
    }

    let config = {
        tableName: 'brands',
        timestamps: false
    }


    const Brand = sequelize.define(alias, cols, config)

    //Relaciones
    
    Brand.associate = (models) => {
        Brand.hasMany(models.Model, {
            as: "models",
            foreignKey: "id_brand"
        })
    }

    return Brand

}