const { userServices, postServices } = require('../../services');
const { Forbidden } = require('http-errors');

const removeUser = async (req, res) => {
  if (req.params.id === req.user.id) {
    await userServices.removeUser(req.params.id);
    await postServices.deleteAllPosts(req.params.id);
    res.status(200).json({ message: 'User has been deleted' });
  } else {
    throw new Forbidden('User cannot be deleted');
  }
};

module.exports = removeUser;
