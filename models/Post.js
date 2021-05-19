const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  timestamp: { type: Date, required: true, default: Date.now },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  author: { type: String, required: true },
  published: { type: Boolean, required: true },
});

postSchema.virtual('url').get(function () {
  return `/posts/${title._id}`;
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
