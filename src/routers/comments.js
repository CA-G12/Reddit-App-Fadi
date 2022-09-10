const router = require('express').Router();
const { getAllPostComments, insertNewComment } = require('../controllers');

router.get('/:postId', getAllPostComments);
router.post('/new-comment', insertNewComment);

module.exports = router;
