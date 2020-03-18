// Requiring necessary npm packages
var express = require('express');
var session = require('express-session');
// Requiring passport as we've configured it
// var passport = require("./config/passport");

const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8030;
var db = require('./models');
// console.log(typeof db.User);

// Creating express app and configuring middleware needed for authentication
var app = express();

// We need to use sessions to keep track of our user's login status
app.use(
	session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);

// middleware for bodyParser;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// the password check;
app.use(passport.initialize());
app.use(passport.session());

//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// handlebars;
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('./config/passport.js');
// routes
require('./routes/handlebars-routes.js')(app);
require('./routes/api-routes.js')(app);
require('./routes/exhibit-api-routes.js')(app);
require('./routes/name-api-routes.js')(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: false }).then(function() {
	app.listen(PORT, function() {
		console.log(
			'==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
			PORT,
			PORT
		);
	});
});
