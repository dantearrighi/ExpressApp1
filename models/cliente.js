var mongoose = require('mongoose'), Schema = mongoose.Schema;
var clienteSchema = new Schema({
    nombre: String,
    dni: Number,
    apellido: String,
});

clienteSchema.static("buscarClientes", function (cb) {
    this.find({ nombre: "cliente" }, function (err, r) {
        cb(r);
    });
});
clienteSchema.static("eliminarcliente", function (id, cb) {
    this.remove({ _id: id, nombre: "cliente" }, function (err) {
        cb();
    });
});
clienteSchema.static("obtenercliente", function (id, cb) {
    this.find({ _id: id, nombre: "cliente" }, function (err, r) {
        cb(r);
    });
});
clienteSchema.static("editarcliente", function (id, name, cb) {
    this.findOne({ _id: id, nombre: "cliente" }, function (err, r) {
        r.nombre = name;
        r.save(function (err, cl) {
            cb(cl);
        });
    });
});
clienteSchema.static("buscarPorNombre", function (name, cb) {
    this.find({ nombre: name }, function (err, r) {
        cb(r);
    });
});

module.exports = mongoose.model('cliente', clienteSchema);