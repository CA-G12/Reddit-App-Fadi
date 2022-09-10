const router = require('express').Router();
const {
  getSinginPage, getSingupPage, getPrivatePost, getPrivateFeed,
} = require('../controllers');
const verifyAccessToken = require('../middlewears/verifyAccessToken');

router.get('/signin', getSinginPage);
router.get('/signup', getSingupPage);
router.get('/profile/:username', verifyAccessToken, getPrivateFeed);
router.get('/profile/:username/:postid', verifyAccessToken, getPrivatePost);

module.exports = router;
