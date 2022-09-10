const router = require('express').Router();
const { getFeedPosts, getASinglePost, insertNewPosts } = require('../controllers');

router.get('/feed', getFeedPosts);
router.get('/post/:id', getASinglePost);
router.post('/new-post', insertNewPosts);

module.exports = router;
