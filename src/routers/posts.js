const router = require('express').Router();
const { getFeedPosts, getASinglePost, insertNewPosts } = require('../controllers');
const verifyAccessToken = require('../middlewears/verifyAccessToken');

router.get('/feed', getFeedPosts);
router.get('/post/:id', verifyAccessToken, getASinglePost);
router.post('/new-post', verifyAccessToken, insertNewPosts);

module.exports = router;
