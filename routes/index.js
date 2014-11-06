
/*
 * GET home page.
 */

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
    res.render('clientes', { title: 'Clientes', year: new Date().getFullYear(), message: 'Administracion de Clientes' });
}


exports.clienteABM = function (req, res) {
    res.render('clientesABM', { title: 'Clientes', year: new Date().getFullYear(), message: 'ABM de Clientes' });
}

exports.exito = function (req, res) {
    res.render('exito', { title: 'exito' });}


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