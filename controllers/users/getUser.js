const { userServices } = require('../../services');

const getUser = async (req, res) => {
  const user = await userServices.findCurrentUserById(req.params.id);

  const { createdAt, _id, description, email, followers, following, profilePicture, updatedAt, username } = user;

  res.status(200).json({ createdAt, _id, description, email, followers, following, updatedAt, profilePicture, username });
};

module.exports = getUser;
