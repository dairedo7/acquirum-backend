const { postServices } = require('../../services');

const getUserPosts = async (req, res) => {
  const userPosts = await postServices.getUsersPosts(req.params.id).sort({ createdAt: -1 });

  res.status(200).json(userPosts);
};

module.exports = getUserPosts;
