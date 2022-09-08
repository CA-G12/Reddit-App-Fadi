const connection = require('../../config/connection');

const getUserQuery = (username) => connection.query(`SELECT * FROM USERS where username = '${username}'`);
const getUsername = (username) => connection.query(`SELECT USERNAME FROM USERS where username = '${username}'`);

module.exports = { getUserQuery, getUsername };
