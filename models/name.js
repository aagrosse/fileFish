module.exports = function (sequelize, DataTypes) {
  const Names = sequelize.define("Names", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },

  });

  Names.associate = function (models) {
    // Associating Name with Exhibits
    // When an Name is deleted, also delete any associated Exhibits
    Names.hasMany(models.Exhibits, {
      onDelete: "cascade"
    });
  };

  return Names;
};