module.exports = (sequelize, DataTypes) =>{

    const convention = sequelize.define("convention", {
        idConv: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,

        },
        dateDebut: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        dateFin: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        numAffil: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: "affilie",
                key: "num",
            }
        },
        numAss: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: "assure",
                key: "imma",
            }
        }
        
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return convention;

};