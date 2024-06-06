const router = require('express').Router();

const { signup } = require('../controllers/auth.controller');
const { test1 } = require('../controllers/auth.controller');


router.get('/', test1);
router.post('/signup', signup )

module.exports = router;





