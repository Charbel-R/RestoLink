const router = require('express').Router();

const { signup, signin, signout, profile, deleteUser, updateUser, addToFavorites } = require('../controllers/auth.controller');
const { verifyToken } = require('../utils/authUser');



router.post('/signup', signup)
router.post('/signin', signin)
router.get('/profile', profile)
router.delete('/user/delete/:id', deleteUser);
router.put('/user/edit/:id', updateUser);
router.put('/favorites/:id', addToFavorites);
router.get('/signout', signout);

module.exports = router;





