const { postServices } = require('../../services');

const { getPostById, addLike, removeLike } = postServices;

const likeOrDislike = async (req, res) => {
  const post = await getPostById(req.params.id);
  const currentUserId = req.body.id;

  if (!post.likes.includes(currentUserId)) {
    await addLike(post.id, currentUserId);
    res.status(200).json('The post has been liked');
  } else {
    await removeLike(post.id, currentUserId);
    res.status(200).json('The post has been disliked');
  }
};

module.exports = likeOrDislike;
