var mongoose = require('mongoose'), Schema = mongoose.Schema;
var clienteSchema = new Schema({
    nombre: String,
    dni: Number
});
module.exports = mongoose.model('Cliente', clienteSchema);