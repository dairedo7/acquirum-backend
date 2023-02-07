const { userServices } = require('../../services');

const getUser = async (req, res) => {
  const user = await userServices.findCurrentUserById(req.params.id);

  res.status(200).json(user);
};

module.exports = getUser;
