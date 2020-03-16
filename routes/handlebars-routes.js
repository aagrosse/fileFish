// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const express = require('express');

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
	app.get("/", function(req, res) {
		// If the user already has an account send them to the members page
		if (req.user) {
			console.log("above members: handlebars-routes");
			res.render("members");
		}

		res.render("signup");
	});

	app.get("/login", function(req, res) {
		console.log("in handlebars-routes: login");
		// If the user already has an account send them to the members page
		if (req.user) {
			res.render("members");
		}
		res.render("login");
	});

	// Here we've add our isAuthenticated middleware to this route.
	// If a user who is not logged in tries to access this route they will be redirected to the signup page
	app.get("/members", isAuthenticated, function(req, res) {
		res.render("members");
	});

	// routing to new system page
	app.get("/newSystem", function(req, res) {
		res.render("newSystem");
	});

	// routing to add Data page
	app.get("/addData", function(req, res) {
		res.render("addData");
	});

	// routing to add Data page
	app.get("/searchData", function(req, res) {
		res.render("searchData");
	});

	app.use("/public", express.static('public'));

	
};
