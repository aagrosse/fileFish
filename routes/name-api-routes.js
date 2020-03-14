const db = require("../models");

module.exports = function(app) {

//Finds all
  app.get("/api/names", (req, res) => {
    db.Names.findAll({
      include: [db.Exhibits]
    }).then(function(dbName) {
      res.json(dbName);
    });
  });

  app.get("/api/names/:id", (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Exhibits
    db.Names.findOne({
      where: {
        id: req.params.id
      }
      ,
      include: [db.Exhibits]
    }).then(function(dbName) {
      console.log(dbName);
      res.json(dbName);
    });
  });

  app.post("/api/names", (req, res) => {
    db.Names.create(req.body).then(function(dbName) {
      res.json(dbName);
    });
  });

  app.delete("/api/names/:id", (req, res) => {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbName) {
      res.json(dbName);
    });
  });

};
