const express = require('express');
const { addPost, deletePost, likeOrDislike, getAllPosts, getUserPosts, getExplorePosts } = require('../controllers');
const { wrapper, verifyToken } = require('../middlewares');

const router = express.Router();

//Create new post
router.post('/', verifyToken, wrapper(addPost));

//Delete post
router.delete('/:id', verifyToken, wrapper(deletePost));

//Like/Dislike the post
router.put('/:id/like', verifyToken, wrapper(likeOrDislike));
module.exports = router;

//Get all timeline posts
router.get('/timeline/:id', getAllPosts);

//Get user posts only
router.get('/user/all/:id', getUserPosts);

//Explore
router.get('/explore', getExplorePosts);
