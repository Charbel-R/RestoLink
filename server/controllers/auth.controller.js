const User = require("../models/user.model");
const bcryptjs = require('bcryptjs');

exports.test1 = (req, res) => {

  res.json({
    message: 'Auth Controllers Working ',
  });
}

exports.signup = async (req, res) => {
  console.log(req.body)
  const { username, email, password} = req.body;
  const hashPass = bcryptjs.hashSync(password, 10);

  const newUser = new User({username, email, password: hashPass});
  try {
    await newUser.save();
    res.status(201).json({message: 'User created successfully'})
  } catch (error) {
    res.status(500).json(error.message)
  }
}