const router = require('express').Router();
const { getAllPostComments, insertNewComment } = require('../controllers');
const verifyAccessToken = require('../middlewears/verifyAccessToken');

router.get('/:postId', getAllPostComments);
router.post('/new-comment', verifyAccessToken, insertNewComment);

module.exports = router;
