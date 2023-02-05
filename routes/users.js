const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('the get request for users was done');
});

module.exports = router;
