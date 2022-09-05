const connection = require('../../config/connection');

const getAllUsernamesQuery = () => connection.query('SELECT USERNAME FROM USERS');

module.exports = getAllUsernamesQuery;
