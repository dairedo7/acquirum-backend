const express = require('express');
const { getUser, updateUser, removeUser, followUser, unFollowUser } = require('../controllers');
const { wrapper, verifyToken } = require('../middlewares');

const router = express.Router();

module.exports = router;
