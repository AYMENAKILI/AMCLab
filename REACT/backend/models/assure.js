module.exports = (sequelize, DataTypes) =>{

    const assure = sequelize.define("assure", {
        imma: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        }
        
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return assure;

};