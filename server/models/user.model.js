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
  profilePicture: {
    type: String,
    default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F4733409%2Fbasic_profile_ui_icon&psig=AOvVaw3fHZ7FHSLRcDxVS4OXPmxY&ust=1717793090617000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiHqqHsx4YDFQAAAAAdAAAAABAE'
  }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;
