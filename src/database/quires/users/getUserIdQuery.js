const connection = require('../../config/connection');

const getUsersIdQuery = (userId) => connection.query(`SELECT id FROM USERS where username = '${userId}`);

module.exports = getUsersIdQuery;
