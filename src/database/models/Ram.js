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
        tableName: 'ram',
        timestamps: false
    }

    const Ram = sequelize.define(alias, cols, config)

    //Relaciones

    Ram.associate = (models) => {
        Ram.hasMany(models.Cellphone, {
            as: "cellphones",
            foreignKey: "id_ram"
        })
    }

    return Ram
}