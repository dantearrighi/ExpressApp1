
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var glob = require('glob');
var mongoose = require('mongoose');

mongoose.connect('mongodb://' + "localhost" +'/test');
var DB = mongoose.connection;
DB.on('error', console.error.bind(console, 'connection error'));
DB.once('open', function callback() {
    console.log('DB está conectada con Mongoose');
});
var cliente = mongoose.model('cliente', require('./models/cliente.js'));


var app = exports.app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

require('./routes/main.js');
app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.get('/clientes', routes.clientes);
app.get('/tramites', routes.tramites);
app.get('/crearCliente', routes.clienteABM);
app.post('/crearClienteDoit', routes.crearClienteDoit);
app.post('/exito', routes.exito);




http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
