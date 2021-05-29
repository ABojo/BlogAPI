const router = require('express').Router();
const postController = require('../controllers/postController');
const authController = require('../controllers/authController');

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPost);
router.post('/', authController.protect, postController.createPost);
router.put('/:id', authController.protect, postController.editPost);
router.delete('/:id', authController.protect, authController.authorizeModify);

module.exports = router;
