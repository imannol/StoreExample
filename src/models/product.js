const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
nombre : String,
marca: String,
precio: Number

});

module.exports = mongoose.model('product', productSchema);
