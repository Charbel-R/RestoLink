const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models/user.model");
const Supplier = require('../models/supplier.model');
const SECRET_KEY = process.env.SECRET_KEY || 'This isint secure';


exports.signup = async (req, res) => {
  const { username, email, password, gender } = req.body;
  const user = await User.findOne({ email: email });
  if (user)
    return res
      .status(409).send({ error: '409', message: 'User already exists' });

  const hashPass = bcryptjs.hashSync(password, 10);
  const newUser = new User({username, email, password: hashPass, gender});

  try {
    const { _id } = await newUser.save();
    const accessToken = jwt.sign({ _id }, SECRET_KEY);
    res.status(201).json({
      message: 'User created successfully',
      accessToken
    })
  } catch (error) {
    res.status(500).json(error.message)
  }
}

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    const validatedPass = await bcryptjs.compareSync(password, user.password);
    if (!validatedPass) 
      return res.status(401).json({ message: 'Invalid email or password' });

    const accessToken = jwt.sign({ _id: user._id }, SECRET_KEY);
    const { password: hashPass, ...userInfo } = user._doc;
    const expiryDate = new Date(Date.now() + 3600000); //1 hr 

    res
    .cookie('accessToken', accessToken, {httpOnly: true,  expires: expiryDate})
    .status(200).send({userInfo, accessToken } );
  } catch (error) {
    res
      .status(401)
      .send({ error: '401', message: 'Username or password is incorrect' });
  }
}

exports.profile = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const { password: hashPass, ...userProfile } = user._doc; 
    res.status(200).json(userProfile);
  } catch (error) {
    console.error('Error retrieving user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body; 
    
    const user = await User.findByIdAndUpdate(id, updates, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user); // Send updated user data
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.addToFavorites = async (req, res) => {
  try {
    const { id } = req.params; // Supplier ID to add/remove

    const userId = req.user._id; //  Extract user ID from token

    const existingSupplier = await Supplier.findById(id);
    if (!existingSupplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const isFavorite = user.favoriteSuppliers.includes(id);

    if (!isFavorite) { // Only add if not already a favorite
      user.favoriteSuppliers.push(id); // Add supplier ID to favorites list
    }

    await user.save();
    res.status(200).json({ message: 'Supplier added to favorites successfully' });
  } catch (error) {
    console.error('Error adding supplier to favorites:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.removeFromFavorites = async (req, res) => {
  try {
    const { id } = req.params; // Supplier ID to remove

    const userId = req.user._id; //  Extract user ID from token

    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    user.favoriteSuppliers = user.favoriteSuppliers.filter(favId => favId.toString() !== id); // Remove from favorites

    await user.save();

    res.status(200).json({ message: 'Supplier removed from favorites successfully' });
  } catch (error) {

    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.signout = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); 
  res.clearCookie('accessToken'); 
  res.send('Signout success!');
};