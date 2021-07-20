module.exports = (sequelize, DataTypes) => {
    let alias = 'Model'

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        idBrand: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        model: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false
        },
        mainImage: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }

    let config = {
        tableName: 'models',
        timestamps: false,
        underscored: true
    }


    const Model = sequelize.define(alias, cols, config)

    //Relaciones

    Model.associate = (models) => {
        Model.hasMany(models.Cellphone, {
            as: "cellphones",
            foreignKey: "id_model"
        }),
        
        Model.belongsTo(models.Brand,{
            as: "brand",
            foreignKey: "id_brand"
        })
    }
    

    return Model

}