const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find();

  res.json({
    status: 'success',
    data: {
      posts,
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
