const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    default: ''
  },
  profilePicture: {
    type: String,
    default: 'https://iio.azcast.arizona.edu/sites/default/files/profile-blank-whitebg.png',
  },
  favoriteSuppliers: {
    type: [mongoose.Schema.Types.ObjectId],
    default: []
  }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;
