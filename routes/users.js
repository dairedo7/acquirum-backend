const express = require('express');
const { getUser, updateUser, removeUser, followUser, unFollowUser } = require('../controllers');
const { wrapper, verifyToken } = require('../middlewares');

const router = express.Router();
//Get user
router.get('/find/:id', wrapper(getUser));

//Update user
router.put('/:id', verifyToken, wrapper(updateUser));

//Delete user
router.delete('/:id', verifyToken, wrapper(removeUser));

//Follow
router.put('/follow/:id', verifyToken, followUser);

//Unfollow
router.put('/unfollow/:id', verifyToken, unFollowUser);

module.exports = router;
