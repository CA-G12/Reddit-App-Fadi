const connection = require('../../config/connection');

const getUserQuery = (username) => connection.query(`SELECT * FROM USERS where username = '${username}'`);

module.exports = getUserQuery;