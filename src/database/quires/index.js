const { getUserQuery, getUsername } = require('./users/getUserQuery');
const insertNewUserQuery = require('./users/insertNewUser');
const getAllUsernamesQuery = require('./users/getAllUsersnameQuery');

module.exports = {
  getUserQuery,
  insertNewUserQuery,
  getAllUsernamesQuery,
  getUsername,
};
