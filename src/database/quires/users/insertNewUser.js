const connection = require('../../config/connection');

const insertNewQuery = ({ username, password, avatar }) => connection.query({
  text: 'INSERT INTO USERS(USERNAME, PASSWORD, AVATAR) values($1, $2, $3)',
  values: [username, password, avatar],
});

module.exports = insertNewQuery;
