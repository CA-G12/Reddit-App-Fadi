const router = require('express').Router();
const { getSinginPage, getSingupPage } = require('../controllers');

router.get('/signin', getSinginPage);
router.get('/signup', getSingupPage);

module.exports = router;
