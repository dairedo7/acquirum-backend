const { Unauthorized } = require('http-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { userServices } = require('../../services');
const { SECRET_KEY } = process.env;

const signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Unauthorized('You need to fill out both email and password fields!');
  }

  const user = await userServices.findUserByEmail(email);

  if (!user) {
    throw new Unauthorized('This user does not exist');
  }

  const name = user.username;

  const passCompare = bcrypt.compare(password, user.password);

  const result = await passCompare;

  if (!result) {
    throw new Unauthorized('Wrong password');
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '30d' });

  await userServices.findUserAndUpdateToken(user._id, token);
  res
    .cookie('access_token', token, {
      httpOnly: true,
    })
    .json({
      status: 'success',
      code: 200,
      data: {
        token,
        email,
        name,
        _id: user._id,
      },
    });
};

module.exports = signIn;
