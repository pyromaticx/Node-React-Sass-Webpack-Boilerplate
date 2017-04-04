var express = require('express');
var bodyParser = require('body-parser');
var path = require("path")
var app = express();
var port = process.env.PORT || 8080;
var routes = require('./routes');
// View engine config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false, limit: '250mb' }));
app.use('/', routes);


app.listen(port);