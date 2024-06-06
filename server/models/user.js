const mongoose = require('./../database.js');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email:{
    // TODO check the type of email 
    type: String,
    required: true
  },
  address: {
    // TODO check the type of address 
    type: String,
    required: true
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
