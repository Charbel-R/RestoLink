const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  supplierName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  telephone: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  logoUrl: {
    type: String,
  },
  category: {
    type: String,
  },
  website: {
    type: String,
  },
  description: {
    type: String,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;