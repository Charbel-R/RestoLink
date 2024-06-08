const { getSuppliers } = require('../controllers/suppliers.controllers');

const router = require('express').Router();

router.get('/', getSuppliers )

module.exports = router;