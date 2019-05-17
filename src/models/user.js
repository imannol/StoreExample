const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
nombre : String,
apodo: String,
domicilio: String,
telefono: Number
});

module.exports = mongoose.model('user', userSchema);
