const Post = require('../models/Post');
const catchError = require('../utils/catchError');

exports.getAllPosts = catchError(async (req, res) => {
  const posts = await Post.find().select('-__v -comments');

  res.json({
    status: 'success',
    data: {
      posts,
    },
  });
});

exports.getPost = catchError(async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id).select('-__v').populate('comments');

  res.json({
    status: 'success',
    data: {
      post,
    },
  });
});

exports.createPost = catchError(async (req, res) => {
  const { title, body, published } = req.body;
  const post = await Post.create({
    title,
    body,
    published,
    author: req.currentUser.username,
  });

  res.json({
    status: 'success',
    data: { post },
  });
});

exports.editPost = catchError(async (req, res) => {
  const { title, body, published } = req.body;
  const { id } = req.params;
  const post = await Post.findOneAndUpdate(
    { _id: id },
    { title, body, published },
    { runValidators: true, new: true }
  ).select('-_id -__v');

  res.json({
    status: 'success',
    data: { post },
  });
});

exports.deletePost = catchError(async (req, res) => {
  const post = await Post.findByIdAndRemove(req.params.id);

  res.json({ status: 'success', data: { post } });
});
