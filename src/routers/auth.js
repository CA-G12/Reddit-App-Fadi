const router = require('express').Router();
const { postSignin, postSignup, getLogout } = require('../controllers');

router.post('/signin', postSignin);
router.post('/signup', postSignup);
router.get('/logout', getLogout);

module.exports = router;
