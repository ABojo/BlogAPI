const router = require('express').Router();
const meController = require('../controllers/meController');
const authController = require('../controllers/authController');

router.use('/login', meController.login);
router.use('/register', meController.register);
router.use('/posts', authController.protect, meController.getMyPosts);

module.exports = router;
