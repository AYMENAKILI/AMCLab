module.exports = (sequelize, DataTypes) => {
    const Affilies = sequelize.define('Affilies', {
      AFF_V_NUM_AFF: {
        type: DataTypes.STRING(255),
        primaryKey: true,
      },
      AFF_L_NOM: {
        type: DataTypes.STRING(255),
      },
      AFF_L_ADRESSE: {
        type: DataTypes.STRING(255),
      },
      AFF_C_POSTAL: {
        type: DataTypes.STRING(20),
      },
      AFF_V_TEL: {
        type: DataTypes.STRING(20),
      },
    }, {
      tableName: 'd_affilies',
      timestamps: false,
    });
  
    return Affilies;
  };
  