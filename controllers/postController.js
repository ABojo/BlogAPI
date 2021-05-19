const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().select('-_id -__v');

  res.json({
    status: 'success',
    data: {
      posts,
    },
  });
};

exports.getPost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id).select('-_id -__v');

  res.json({
    status: 'success',
    data: {
      post,
    },
  });
};

exports.createPost = async (req, res) => {
  const { title, body, published } = req.body;
  const post = await Post.create({
    title,
    body,
    published,
    author: 'req.user.username',
  });

  res.json({
    status: 'success',
    data: { post },
  });
};

exports.editPost = async (req, res) => {
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
};
