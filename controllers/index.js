module.exports = {
  signup: require('./auth/signup'),
  signin: require('./auth/signin'),
  getUser: require('./users/getUser'),
  updateUser: require('./users/updateUser'),
  removeUser: require('./users/removeUser'),
  followUser: require('./users/followUser'),
  unFollowUser: require('./users/unFollowUser'),
};
