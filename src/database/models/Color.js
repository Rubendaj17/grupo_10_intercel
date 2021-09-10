module.exports = (sequelize, DataTypes) => {
    let alias = 'Color'

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false
        }
    }

    let config = {
        tableName: 'colors',
        timestamps: false
    }


    const Color = sequelize.define(alias, cols, config)

    //Relaciones
    Color.associate = (models) => {
        Color.hasMany(models.Cellphone,{
            as: "cellphones",
            foreignKey: "id_color"
        })

    }

    return Color

}