const router = require('express').Router();
const { getUsersInfo } = require('../controllers');
const verifyAccessToken = require('../middlewears/verifyAccessToken');

router.get('/:username', verifyAccessToken, getUsersInfo);

module.exports = router;
