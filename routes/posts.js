const express = require('express');
const { addPost, deletePost, likeOrDislike, getAllPosts, getUserPosts, getExplorePosts } = require('../controllers');
const { wrapper, verifyToken } = require('../middlewares');

const router = express.Router();

//Create new post
router.post('/', wrapper(addPost));

//Delete post
router.delete('/:id', verifyToken, wrapper(deletePost));

//Like/Dislike the post
router.put('/:id/like', wrapper(likeOrDislike));

//Get all timeline posts
router.get('/timeline/:id', getAllPosts);

//Get user posts only
router.get('/user/all/:id', getUserPosts);

//Explore posts
router.get('/explore', getExplorePosts);

module.exports = router;
