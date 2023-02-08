const { BadRequest } = require('http-errors');
const { postServices } = require('../../services');

const { getPostById, deleteCurrentPost } = postServices;

const deletePost = async (req, res) => {
  if (req.params === null) {
    throw new BadRequest('Please, provide the id of the post to be deleted');
  }

  const post = await getPostById(req.params.id);

  if (req.user.id === post.userId) {
    await deleteCurrentPost(post.id);
  }

  res.status(200).json('Post has been deleted');
};

module.exports = deletePost;
