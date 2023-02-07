const { userServices } = require('../../services');
const { Unauthorized } = require('http-errors');

const { updateUserFollowers, updateUserFollowing } = userServices;

const followUser = async (req, res) => {
  const followingUser = await userServices.findCurrentUserById(req.params.id);
  const currentUser = await userServices.findCurrentUserById(req.user.id);

  if (!followingUser.followers.includes(currentUser.id)) {
    await updateUserFollowers(followingUser.id, currentUser.id);
    await updateUserFollowing(currentUser.id, followingUser.id);
  } else {
    throw new Unauthorized('You are already following this user');
  }

  res.status(200).json({ message: 'Following the user' });
};

module.exports = followUser;
