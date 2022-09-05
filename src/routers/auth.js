const router = require('express').Router();
const { postSignin, postSignup } = require('../controllers');

router.post('/signin', postSignin);
router.post('/signup', postSignup);

module.exports = router;
