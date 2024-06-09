const Supplier = require('../models/supplier.model');

exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.send(suppliers)
  } catch (error) {
    res.status(500).send("Error: ", + error.message);
  }
}

exports.toggleFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSupplier = req.body;
    const existingSupplier = await Supplier.findById(id);
    if (!existingSupplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }

    existingSupplier.isFavorite = updatedSupplier.isFavorite;
    await existingSupplier.save();

    res.json({ message: 'Supplier favorite status updated successfully' });
  } catch (error) {
    console.error('Error updating supplier:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}