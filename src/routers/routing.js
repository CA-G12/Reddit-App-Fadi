const router = require('express').Router();
const {
  getSinginPage, getSingupPage, getPrivatePost, getPrivateFeed,
} = require('../controllers');

router.get('/signin', getSinginPage);
router.get('/signup', getSingupPage);
router.get('/profile/:username', getPrivateFeed);
router.get('/profile/:username/:postid', getPrivatePost);

module.exports = router;
