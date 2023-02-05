const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Conflict } = require('http-errors');

const { userServices } = require('../../services');
const { SECRET_KEY } = process.env;

const signup = async (req, res) => {
  const { email, username, password } = req.body;

  const user = await userServices.findUserByEmail(email);

  if (user) {
    throw new Conflict('Email in use');
  }

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  await userServices.addNewUser(email, username, hashPassword);
  await user?.save();

  const currentUser = await userServices.findUserByEmail(email);
  const payload = {
    id: currentUser._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '30d' });
  await userServices.findUserAndUpdate(currentUser._id, token);

  res
    .cookie('access_token', token, {
      httpOnly: true,
    })
    .status(201)
    .json({
      status: 'success',
      code: 201,
      username,
      email,
      _id: currentUser._id,
      token,
    });
};

module.exports = signup;
