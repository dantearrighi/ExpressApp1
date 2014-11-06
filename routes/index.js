
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'WASS', year: new Date().getFullYear() });
};

exports.about = function (req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page.' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page.' });
};

exports.clientes = function (req, res) {
    res.render('clientes', { title: 'Clientes', year: new Date().getFullYear, message: 'Administracion de Clientes'})
}

exports.exito = function (req, res) {
    res.render('exito', { title: 'exito' });}

exports.crearClientes = function(req, res)
{
    res.render('crearClientes', { title: 'Alta de clientes' });

}