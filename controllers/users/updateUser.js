const { userServices } = require('../../services');

const updateUser = async (req, res) => {
  if (req.params.id === req.user.id) {
    const updatedUser = await userServices.findUserAndUpdate(req.params.id, req.body);
    const { _id, username, email, followers, following, createdAt, updatedAt, about, profilePicture } = updatedUser;
    res.status(200).json({ _id, username, email, followers, following, createdAt, updatedAt, about, profilePicture });
  } else {
    res.status(403).send({ message: "You can not update someone else's account" });
  }
};

module.exports = updateUser;
