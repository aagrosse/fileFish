module.exports = function(sequelize, DataTypes) {
    const Exhibit = sequelize.define("Exhibit", {
      designation: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,6]
        }
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
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
  