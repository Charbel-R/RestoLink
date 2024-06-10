const Supplier = require('../models/supplier.model');

exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.send(suppliers)
  } catch (error) {
    res.status(500).send("Error: ", + error.message);
  }
}

exports.getSupplierById = async (req, res) => {
  try {
    const { id } = req.params;
    const supplier = await Supplier.findById(id);
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }
    res.send(supplier);
  } catch (error) {
    console.error('Error fetching supplier:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};