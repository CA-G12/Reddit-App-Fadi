const router = require('express').Router();
const { getUsersInfo } = require('../controllers');

router.get('/:username', getUsersInfo);

module.exports = router;
