const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models/user.model");
const SECRET_KEY = process.env.SECRET_KEY || 'This isint secure';
// TODO create expiry date for cookie

exports.signup = async (req, res) => {
  const { username, email, password} = req.body;
  const user = await User.findOne({ email: email });
  if (user)
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' });
  const hashPass = bcryptjs.hashSync(password, 10);
  const newUser = new User({username, email, password: hashPass});
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
    if (!validatedPass) throw new Error();
    const accessToken = jwt.sign({ _id: user._id }, SECRET_KEY);
    const { password: hashPass, ...rest } = user._doc
    res
    .cookie('accesToken', accessToken)
    .status(200).send({ rest });
  } catch (error) {
    res
      .status(401)
      .send({ error: '401', message: 'Username or password is incorrect' });
  }
}