module.exports = function (sequelize, DataTypes) {
  const Exhibit = sequelize.define("Exhibit", {
    designation: {
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
