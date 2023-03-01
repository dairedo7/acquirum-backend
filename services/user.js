const { User } = require('../models');

const findUserByEmail = async (email) => {
  const findUserByEmail = await User.findOne({ email });
  return findUserByEmail;
};

const findUserByUsername = async (username) => {
  const findUserByName = await User.findOne({ username });
  return findUserByName;
};

const findUserById = async (id, token) => {
  const findUserById = await User.findOne({ _id: id }, { token });
  return findUserById;
};

const findCurrentUserById = async (id) => {
  const findUserById = await User.findOne({ _id: id });
  return findUserById;
};

const findUserAndUpdateToken = async (id, token) => {
  const findUserById = await User.findByIdAndUpdate({ _id: id }, { token });
  return findUserById;
};

const findUserAndUpdate = async (id, body) => {
  const findUserById = await User.findByIdAndUpdate(
    { _id: id },
    {
      $set: body,
    },
    {
      new: true,
    }
  );
  return findUserById;
};

const removeUser = async (id) => {
  const removedUser = await User.findByIdAndRemove(id);
  return removedUser;
};

const addNewUserByGoogle = async (email, username, password) => {
  const addByGoogle = await new User({ email, username, password }).save();

  return addByGoogle;
};

const addNewUser = async (email, username, password) => {
  const addNewUser = await User.create({ email, username, password });

  return addNewUser;
};

const updateUserFollowers = async (id, followerId) => {
  const updatedUser = await User.updateOne(
    { _id: id },
    {
      $push: { followers: followerId },
    }
  );

  return updatedUser;
};

const updateUserFollowing = async (id, followingId) => {
  const updatedUser = await User.updateOne(
    { _id: id },
    {
      $push: { following: followingId },
    }
  );

  return updatedUser;
};

const removeFromFollowers = async (id, followerId) => {
  const updatedUser = await User.updateOne(
    { _id: id },
    {
      $pull: { followers: followerId },
    }
  );

  return updatedUser;
};

const removeFromFollowing = async (id, followingId) => {
  const updatedUser = await User.updateOne(
    { _id: id },
    {
      $pull: { following: followingId },
    }
  );

  return updatedUser;
};

const updateToken = async (id, token) => {
  const newToken = await User.updateOne({ _id: id }, { token });

  return newToken;
};

module.exports = {
  findUserByEmail,
  findUserById,
  findCurrentUserById,
  removeUser,
  addNewUserByGoogle,
  addNewUser,
  updateToken,
  updateUserFollowers,
  updateUserFollowing,
  removeFromFollowers,
  removeFromFollowing,
  findUserAndUpdate,
  findUserAndUpdateToken,
  findUserByUsername,
};
