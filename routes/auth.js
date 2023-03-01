const express = require('express');
const { signup, signin } = require('../controllers');
const { wrapper } = require('../middlewares');

const router = express.Router();

router.post('/signup', wrapper(signup));

router.post('/signin', wrapper(signin));

// router.post('/signin', (req, res) => {});

module.exports = router;
