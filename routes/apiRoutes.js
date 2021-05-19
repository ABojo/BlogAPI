const router = require('express').Router();
const userRouter = require('./userRoutes');
const postRouter = require('./postRoutes');
const commentRouter = require('./commentRoutes');
const authController = require('../controllers/authController');

router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/comments', commentRouter);
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;
