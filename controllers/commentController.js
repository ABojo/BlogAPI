const Post = require('../models/Post');
const Comment = require('../models/Comment');
const catchError = require('../utils/catchError');

exports.createComment = catchError(async (req, res) => {
  const { postId, name, body } = req.body;
  const [post, comment] = await Promise.all([
    Post.findById(postId),
    Comment.create({ name, body, post: postId }),
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

exports.deleteComment = catchError(async (req, res) => {
  const { id } = req.params;
  const comment = await Comment.findByIdAndRemove(id);

  res.json({
    status: 'success',
    data: {
      comment,
    },
  });
});
