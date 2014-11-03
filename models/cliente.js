var mongoose = require('mongoose'), Schema = mongoose.Schema;
var clienteSchema = new Schema({
    nombre: String,
    dni: Number,
    apellido: String;
});
module.exports = mongoose.model('Cliente', clienteSchema);