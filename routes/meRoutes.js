const router = require('express').Router();
const meController = require('../controllers/meController');

router.use('/login', meController.login);
router.use('/register', meController.register);

module.exports = router;
