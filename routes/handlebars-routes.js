// Requiring path to so we can use relative routes to our HTML files
const path = require('path');
const express = require('express');

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function(app) {
	app.get('/', function(req, res) {
		// If the user already has an account send them to the members page
		if (req.user) {
			console.log('above members: handlebars-routes');
			res.render('members');
		}

		res.render('signup');
	});

	app.get('/login', function(req, res) {
		console.log('in handlebars-routes: login');
		// If the user already has an account send them to the members page
		if (req.user) {
			res.render('members');
		}
		res.render('login');
	});

	// Here we've add our isAuthenticated middleware to this route.
	// If a user who is not logged in tries to access this route they will be redirected to the signup page
	app.get('/members', isAuthenticated, function(req, res) {
		res.render('members');
	});

	// routing to new system page
	app.get('/newSystem', function(req, res) {
		res.render('newSystem');
	});

	// routing to add Data page
	app.get('/addData', function(req, res) {
		res.render('addData');
	});

	// routing to add Data page
	app.get('/searchData', function(req, res) {
		res.render('searchData');
	});

	// route & json exhibits, for the dropdown on the searchData page.
	app.get('/searchData', function(req, res) {
		db.Names.findAll({})
			.then(function(exhibitNames) {
				res.render('searchData', { exhibitNames: exhibitNames });
				console.log(`EXHIBIT NAMES *******`, exhibitNames);
			})
			.catch(err => {
				// throw err;
				console.log(err);
			});
		// sending back data-obj from the searchData route in mySql;
	});

	// route for displaying selected exhibit
	app.get('/api/exhibit/:selectedExhibit', function(req, res) {
		// tying to get the selected exhibit to find the foreign key and display all values from that table column back on the handlebars page;
		let selectedExhibit = req.params.selectedExhibit;

		console.log(selectedExhibit);

		db.Names.findOne({
			where: {
				name: selectedExhibit
			}
		})
			.then(function(nameData) {
				// res.render('searchData', { nameData: nameData });
				console.log(`****** EXHIBIT NAME VALUES *******`, nameData);
				// return will pass id to the next .then();
				return nameData.id;
			})
			.then(function(nameId) {
				db.Exhibits.findOne({
					where: {
						nameId: nameId
					}
				}).then(function(exhibitData) {
					res.json(exhibitData);
					console.log(`***** exhibitDATA *****`, exhibitData);
				});
			})
			.catch(err => {
				// throw err;
				console.log(err);
			});
		// sending back data-obj from the searchData route in mySql;
	});

	app.use('/public', express.static('public'));
};
