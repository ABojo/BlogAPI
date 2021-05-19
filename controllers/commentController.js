const Post = require('../models/Post');
const Comment = require('../models/Comment');
const catchError = require('../utils/catchError');

exports.createComment = catchError(async (req, res) => {
  const { postId, name, body } = req.body;
  const [post, comment] = await Promise.all([
    Post.findById(postId),
    Comment.create({ name, body }),
  ]);

  post.comments.push(comment._id);
  await post.save();

  res.json({
    status: 'success',
    data: {
      comment,
    },
  });
});
