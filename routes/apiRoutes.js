const router = require('express').Router();
const userRouter = require('./userRoutes');
const postRouter = require('./postRoutes');
const commentRouter = require('./commentRoutes');
const meRouter = require('../routes/meRoutes');

router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/comments', commentRouter);
router.use('/me', meRouter);

module.exports = router;
