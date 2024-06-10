const { getSuppliers, getSupplierById } = require('../controllers/suppliers.controllers');

const router = require('express').Router();

router.get('/', getSuppliers )
router.get('/:id', getSupplierById )

module.exports = router;