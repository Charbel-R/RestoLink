const User = require("../models/user.model");

exports.test1 = (req, res) => {

  res.json({
    message: 'Auth Controllers Working ',
  });
}

exports.signin = async (req, res) => {
  console.log(req.body)
  const { username, email, password} = req.body;
  const newUser = new User({username, email, password});
  try {
    await newUser.save();
    res.status(201).json({message: 'User created successfully'})
  } catch (error) {
    res.status(500).json(error.message)
  }
}