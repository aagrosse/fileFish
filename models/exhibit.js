module.exports = function(sequelize, DataTypes) {
    const Exhibits = sequelize.define("Exhibits", {
      temperature: {
        type: DataTypes.DECIMAL(6,1),
        allowNull: false,
        
      },
      PH: {
        type: DataTypes.DECIMAL(10,1),
        allowNull: false,
        validate: {
            len: [1,6]
          }
      },
      salinity: {
        type: DataTypes.DECIMAL(10,1),
        allowNull: false,
        validate: {
            len: [1,6]
          }
      },
      disolvedOxygen: {
        type: DataTypes.DECIMAL(10,1),
        allowNull: false,
        validate: {
            len: [1,6]
          }
      },
      alkalinity: {
        type: DataTypes.DECIMAL(10,1),
        allowNull: false,
        validate: {
            len: [1,6]
          }
      },
      ammonia: {
        type: DataTypes.DECIMAL(10,1),
        allowNull: false,
        validate: {
            len: [1,6]
          }
      },
      nitrite: {
        type: DataTypes.DECIMAL(10,1),
        allowNull: false,
        validate: {
            len: [1,6]
          }
      },
      nitrate: {
        type: DataTypes.DECIMAL(10,1),
        allowNull: false,
        validate: {
            len: [1,6]
          }
      },
      iodine: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        validate: {
            len: [1,6]
          }
      },
      calcium: {
        type: DataTypes.DECIMAL(10,0),
        allowNull: false,
        validate: {
            len: [1,6]
          }
      },


    });
  
    Exhibits.associate = function(models) {
      // We're saying that a Exhibits should belong to a Name
      // A Exhibit can't be created without a name due to the foreign key constraint
      Exhibits.belongsTo(models.Names, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Exhibits;
  };
  