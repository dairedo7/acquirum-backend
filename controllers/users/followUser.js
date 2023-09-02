const { userServices } = require('../../services');
const { updateUserFollowers, updateUserFollowing } = userServices;

const followUser = async (req, res) => {
  const followingUser = await userServices.findCurrentUserById(req.params.id);
  const currentUser = await userServices.findCurrentUserById(req.body.id);

  if (!followingUser.followers.includes(currentUser.id)) {
    await updateUserFollowers(followingUser.id, currentUser.id);
    await updateUserFollowing(currentUser.id, followingUser.id);
    res.status(200).json({ message: 'Following the user' });
  } else {
    res.status(403).json({ message: 'Forbidden: You are already following this user' });
  }
};

module.exports = followUser;
