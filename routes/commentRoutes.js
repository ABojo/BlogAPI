const router = require('express').Router();
const commentController = require('../controllers/commentController');

router.post('/', commentController.createComment);

module.exports = router;
