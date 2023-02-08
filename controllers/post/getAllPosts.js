const { postServices, userServices } = require('../../services');

const getAllPosts = async (req, res) => {
  const currentUser = await userServices.findCurrentUserById(req.params.id);
  const userPosts = await postServices.getUsersPosts(currentUser.id);

  const followersPosts = await postServices.getFollowersPosts(currentUser);

  res.status(200).json(userPosts.concat(...followersPosts));
};

module.exports = getAllPosts;
