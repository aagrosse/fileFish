// Dependencies
const db = require("../models");

//Routes
module.exports = function (app) {

  // GET route for getting all of the exhibits from the name (system) selected
  app.get("/api/exhibits", (req, res) => {
    let query = {};
    //We use new way to pass optional parameters here: req.query
    //example url: "/api/exhibit?NameId=1"
    if (req.query.NameId) {
      query = {
        NameId: req.query.NameId
      }
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Names
    db.Exhibits.findAll({
      where: query,
      include: [db.Names]
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // GET route for getting all of the posts
  app.get("/api/exhibits/", (req, res) => {
    db.Exhibits.findAll({})
      .then(function (dbExhibit) {
        res.json(dbExhibit);
      });
  });


  // Get route for retrieving a single post
  app.get("/api/posts/:id", (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Exhibits.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Names]
    }).then(function (dbExhibits) {
      res.json(dbExhibits);
    });
  });

  // POST route for saving a new exhibit
  app.post("/api/exhibits", (req, res) => {
    db.Exhibits.create(req.body).then(function (dbExhibits) {
      res.json(dbExhibits);
    });
  });

  // DELETE route for deleting Exhibits
  app.delete("/api/exhibits/:id", (req, res) => {
    db.Exhibits.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbExhibits) {
      res.json(dbExhibits);
    });
  });

  // PUT route for updating Exhibits
  app.put("/api/exhibits", (req, res) => {
    db.Exhibits.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbExhibits) {
        res.json(dbExhibits);
      });
  });
};