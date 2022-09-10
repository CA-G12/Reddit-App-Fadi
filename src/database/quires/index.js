const { getUserQuery, getUsername, getUserProfileInfo } = require('./users/getUserQuery');
const insertNewUserQuery = require('./users/insertNewUser');
const getAllUsernamesQuery = require('./users/getAllUsersnameQuery');
const getAllPosts = require('./posts/getAllPosts');
const getSinglePost = require('./posts/getASinglePost');
const getAllPostsComments = require('./comments/getAllPostsComments');
const getUsersIdQuery = require('./users/getUserIdQuery');
const insertNewPost = require('./posts/insertNewPost');
const insertNewCommentQuery = require('./comments/insertNewVComment');

module.exports = {
  getUserQuery,
  insertNewUserQuery,
  getAllUsernamesQuery,
  getUsername,
  getAllPosts,
  getUserProfileInfo,
  getSinglePost,
  getAllPostsComments,
  getUsersIdQuery,
  insertNewPost,
  insertNewCommentQuery,
};
