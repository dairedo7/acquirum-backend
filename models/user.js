const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    followers: {
      type: Array,
      defaultValue: [],
    },
    following: {
      type: Array,
      defaultValue: [],
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = model('User', UserSchema);

module.exports = { User };
