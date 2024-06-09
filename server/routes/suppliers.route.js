const { getSuppliers, toggleFavorite } = require('../controllers/suppliers.controllers');

const router = require('express').Router();

router.get('/', getSuppliers )
router.put('/:id', toggleFavorite )

module.exports = router;