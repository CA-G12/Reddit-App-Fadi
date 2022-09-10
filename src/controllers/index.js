const {
  getSinginPage, getSingupPage, getPrivatePost, getPrivateFeed,
} = require('./routing');
const { postSignup, postSignin } = require('./auth');
const { getFeedPosts, getASinglePost, insertNewPosts } = require('./posts');
const { getUsersInfo } = require('./users');
const { getAllPostComments, insertNewComment } = require('./comments');

module.exports = {
  getSinginPage,
  getSingupPage,
  postSignup,
  postSignin,
  getPrivatePost,
  getPrivateFeed,
  getFeedPosts,
  getUsersInfo,
  getASinglePost,
  getAllPostComments,
  insertNewPosts,
  insertNewComment,
};
