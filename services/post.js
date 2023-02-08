const { Post } = require('../models');

const addNewPost = (postBody) => {
  return new Post(postBody);
};

const getPostById = (id) => {
  const post = Post.findById(id);
  return post;
};

const getUsersPosts = (userId) => {
  const post = Post.find({ userId: userId });
  return post;
};

const getLikedPosts = () => {
  return Post.find({ likes: { $exists: true } });
};

const getFollowersPosts = async (currentUser) => {
  const followersPosts = await Promise.all(currentUser.following.map((id) => Post.find({ userId: id })));
  return followersPosts;
};

const deleteCurrentPost = (postId) => {
  const post = Post.findById(postId);

  return post.deleteOne();
};

const deleteAllPosts = (userId) => {
  return Post.remove({ userId: userId });
};

const addLike = (postId, userId) => {
  return Post.updateOne(
    { _id: postId },
    {
      $push: { likes: userId },
    },
    {
      runValidators: true,
    }
  );
};

const removeLike = (postId, userId) => {
  return Post.updateOne(
    { _id: postId },
    {
      $pull: { likes: userId },
    },
    {
      runValidators: true,
    }
  );
};

module.exports = { addNewPost, getPostById, deleteCurrentPost, addLike, removeLike, deleteAllPosts, getUsersPosts, getFollowersPosts, getLikedPosts };
