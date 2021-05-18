const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  name: { type: String, required: true },
  body: { type: String, required: true },
  timestamp: { type: Date, required: true, default: Date.now },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
