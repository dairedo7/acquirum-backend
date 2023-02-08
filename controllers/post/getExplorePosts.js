const { postServices } = require('../../services');

const getUserPosts = async (req, res) => {
  const getExplorePosts = await postServices.getLikedPosts().sort({
    likes: -1,
  });
  console.log('userPosts', getExplorePosts);

  res.status(200).json(getExplorePosts);
};

module.exports = getUserPosts;
