// @author: David Thurman
// @github: doctort57
// @comment: Homework 14 - Eat the Burger!



// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controllers.js');
app.use('/', router);

// Open Server
var port = process.env.PORT || 3000;
app.listen(port);