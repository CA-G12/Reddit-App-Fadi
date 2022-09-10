const router = require('express').Router();
const { checkIsVotedPosts, checkIsVotedComments, addVotePost, addVoteComment,} = require('../controllers');

router.post('/is-voted-comment', checkIsVotedComments);
router.post('/is-voted-post', checkIsVotedPosts);
router.post('/post-vote', addVotePost);
router.post('/comment-vote', addVoteComment);

module.exports = router;
