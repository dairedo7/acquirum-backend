const { userServices } = require('../../services');
const { Forbidden } = require('http-errors');

const updateUser = async (req, res) => {
  if (req.params.id === req.user.id) {
    const updatedUser = await userServices.findUserAndUpdate(req.params.id, req.body);

    res.status(200).json(updatedUser);
  } else {
    throw new Forbidden("You can not updated someone else's account");
  }
};

module.exports = updateUser;
