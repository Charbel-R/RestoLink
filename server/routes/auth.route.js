const router = require('express').Router();

const { signup, signin, signout, profile, deleteUser, updateUser, addToFavorites, removeFromFavorites } = require('../controllers/auth.controller');
const { verifyToken } = require('../utils/authUser');



router.post('/signup', signup)
router.post('/signin', signin)
router.get('/profile',verifyToken, profile)
router.delete('/user/delete/:id',verifyToken, deleteUser);
router.put('/user/edit/:id', verifyToken, updateUser);
router.put('/favorites/:id', verifyToken, addToFavorites); // Add to favorites
router.delete('/favorites/:id', verifyToken, removeFromFavorites); // Remove from favorites

router.get('/signout', signout);

module.exports = router;





