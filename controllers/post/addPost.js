const { BadRequest } = require('http-errors');
const { postServices } = require('../../services');

const addPost = async (req, res) => {
  if (req.body === null) {
    throw new BadRequest('The message cannot be empty');
  }
  const newPost = postServices.addNewPost(req.body);

  const savedPost = await newPost.save();
  res.status(200).json(savedPost);
};

module.exports = addPost;
