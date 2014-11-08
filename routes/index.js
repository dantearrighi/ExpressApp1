
/*
 * GET home page.
 */
var app = module.parent.exports.app, vClientes = require('../models/cliente.js');


exports.index = function(req, res) {
    res.render('index', { title: 'WASS', year: new Date().getFullYear() });
};


exports.about = function (req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page.' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page.' });
};

exports.clientes = function (req, res) {
    
    vClientes.buscarClientes(function (cliente) {
        
        res.render('clientes', { title: 'Clientes Listado', obj: cliente, year: new Date().getFullYear(), message: 'Administracion de Clientes' });
        })    
};

exports.listaClientes = function (req, res) {
    
    vClientes.buscarClientes(function (cliente) {
        
        res.render('listaClientes', { title: 'Clientes Listado', obj: cliente, year: new Date().getFullYear(), message: 'Administracion de Clientes' });
    })
};


exports.clienteABM = function (req, res) {
    res.render('clientesABM', { title: 'Clientes', year: new Date().getFullYear(), message: 'ABM de Clientes' });
}

exports.exito = function (req, res) { //NEW
    res.render('exito', { title: 'exito' });
}


exports.exito = function (req, res) {  //NEW
    var vNuevoCliente = new vClientes({ nombre: req.body.nombre, apellido: req.body.apellido, dni: req.body.dni, mail: req.body.mail, tel1: req.body.tel1, tel2: req.body.tel2 });
    vNuevoCliente.save(function (err, vNuevoCliente) {
        res.redirect("/nuevoCliente");
    });
};



exports.nuevoCliente = function (req, res) {   
    res.render('nuevoCliente', { title: 'nuevoCliente' });
}

exports.tramites = function (req, res) {
    res.render('tramites', { title: 'Menú de trámites' });

}

    
    
/**
*
*Create Cliente
**/
/*
exports.crearClienteDoit = function crearClienteDoit(nombre, apellido, dni, mail, tel1, tel2, callback) {
    var clientenuevo = new clientes();
    clientenuevo.nombre = nombre;
    clientenuevo.apelido = apellido;
    clientenuevo.dni = dni;
    clientenuevo.mail = mail;
    clientenuevo.tel1 = tel1;
    clientenuevo.tel2 = tel2;
    
    clientenuevo.save(function (error, result) {
        callback(error, result);
    });
}
*/