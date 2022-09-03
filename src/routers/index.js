const router = require('express').Router();
const users = require('./users');
const auth = require('./auth');
const questions = require('./questions');
const comments = require('./comments');

router.use('/users', users);
router.use('/auth', auth);
router.use('/questions', questions);
router.use('/comments', comments);

module.exports = router;
