const Supplier = require('../models/supplier.model');

exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.send(suppliers)
  } catch (error) {
    res.status(500).send("Error: ", + error.message);
  }
}