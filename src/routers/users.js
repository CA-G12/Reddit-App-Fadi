const router = require('express').Router();
const { getAllUsers } = require('../controllers');

router.get('/', getAllUsers);

module.exports = router;
