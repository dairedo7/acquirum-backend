const { userServices } = require('../../services');
const { Unauthorized } = require('http-errors');

const { removeFromFollowers, removeFromFollowing } = userServices;

const unFollowUser = async (req, res) => {
  const followingUser = await userServices.findCurrentUserById(req.params.id);
  const currentUser = await userServices.findCurrentUserById(req.user.id);

  if (currentUser.following.includes(followingUser.id)) {
    await removeFromFollowers(followingUser.id, currentUser.id);
    await removeFromFollowing(currentUser.id, followingUser.id);
  } else {
    // console.log(error.message);

    throw new Unauthorized('You are not following this user');
  }

  res.status(200).json({ message: 'Unfollowed the user' });
};

module.exports = unFollowUser;
