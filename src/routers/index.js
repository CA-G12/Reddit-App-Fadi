const router = require('express').Router();
const users = require('./users');
const auth = require('./auth');
const posts = require('./posts');
const comments = require('./comments');

router.use('/users', users);
router.use('/auth', auth);
router.use('/posts', posts);
router.use('/comments', comments);

module.exports = router;
