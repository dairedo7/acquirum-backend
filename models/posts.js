const { Schema, model } = require('mongoose');

const PostSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      max: 320,
    },
    lies: {
      type: Array,
      defaultValue: [],
    },
  },
  { timestamps: true }
);

const Post = model('Post', PostSchema);

module.exports = { Post };
