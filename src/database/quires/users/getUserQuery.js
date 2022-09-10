const connection = require('../../config/connection');

const getUserQuery = (username) => connection.query(`SELECT * FROM USERS where username = '${username}'`);
const getUsername = (username) => connection.query(`SELECT USERNAME FROM USERS where username = '${username}'`);
const getUserProfileInfo = (username) => connection.query(`SELECT ID, USERNAME, AVATAR FROM USERS WHERE USERNAME = '${username}'`);

module.exports = { getUserQuery, getUsername, getUserProfileInfo };
