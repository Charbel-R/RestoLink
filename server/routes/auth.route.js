const router = require('express').Router();

const { signin } = require('../controllers/auth.controller');
const { test1 } = require('../controllers/auth.controller');


router.get('/', test1);
router.post('/signin', signin )

module.exports = router;





