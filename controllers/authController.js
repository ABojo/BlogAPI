const User = require('../models/User');
const catchError = require('../utils/catchError');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.protect = catchError(async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const user = await jwt.verify(token, process.env.JWT_SECRET);

  req.currentUser = user;
  next();
});

exports.authorizeModify = catchError(async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findById(id);

  if (post.author !== req.currentUser.username)
    throw new Error('You are not authorized to modify this post!');

  next();
});

exports.authorizeCommentModify = catchError(async (req, res, next) => {
  const { id } = req.params;
  const comment = await Comment.findById(id).populate('post');

  if (comment.post.author !== req.currentUser.username)
    throw new Error('You are not authorized to modify this comment!');

  next();
});
