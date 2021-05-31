const router = require('express').Router();
const commentController = require('../controllers/commentController');
const authController = require('../controllers/authController');

router.post('/', commentController.createComment);
router.delete(
  '/:id',
  authController.protect,
  authController.authorizeCommentModify,
  commentController.deleteComment
);

module.exports = router;
