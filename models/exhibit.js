module.exports = function (sequelize, DataTypes) {
  const Exhibit = sequelize.define("Exhibit", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 6]
      }
    },
    date: {
      type: DataTypes.DATE,
    },
    temperature: {
      type: DataTypes.DECIMAL(6, 1),
      allowNull: false,

    },
    PH: {
      type: DataTypes.DECIMAL(10, 1),
      allowNull: false,
      validate: {
        len: [1, 6]
      }
    },
    salinity: {
      type: DataTypes.DECIMAL(10, 1),
      allowNull: false,
      validate: {
        len: [1, 6]
      }
    },
    disolvedOxygen: {
      type: DataTypes.DECIMAL(10, 1),
      allowNull: false,
      validate: {
        len: [1, 6]
      }
    },
    alkalinity: {
      type: DataTypes.DECIMAL(10, 1),
      allowNull: false,
      validate: {
        len: [1, 6]
      }
    },
    ammonia: {
      type: DataTypes.DECIMAL(10, 1),
      allowNull: false,
      validate: {
        len: [1, 6]
      }
    },
    nitrite: {
      type: DataTypes.DECIMAL(10, 1),
      allowNull: false,
      validate: {
        len: [1, 6]
      }
    },
    nitrate: {
      type: DataTypes.DECIMAL(10, 1),
      allowNull: false,
      validate: {
        len: [1, 6]
      }
    },
    iodine: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        len: [1, 6]
      }
    },
    calcium: {
      type: DataTypes.DECIMAL(10, 0),
      allowNull: false,
      validate: {
        len: [1, 6]
      }
    },


    date: {
      type: DataTypes.DATE,
    },

    temperature: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        len: [1, 6]
      }
    },

    PH: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        len: [1, 6]
      }
    },

    salinity: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        len: [1, 6]
      }
    },

  });

  // Exhibit.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Post.belongsTo(models.Author, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Exhibit;
};
