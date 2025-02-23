module.exports = (sequelize, DataTypes) =>{

    const affilie = sequelize.define("affilie", {
        num: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        }
        
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return affilie;

};