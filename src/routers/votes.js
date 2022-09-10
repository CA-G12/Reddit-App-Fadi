const router = require('express').Router();
const { checkIsVotedPosts, addVotePost } = require('../controllers');

router.post('/is-voted-post', checkIsVotedPosts);
router.post('/post-vote', addVotePost);

module.exports = router;
