const {
  getSinginPage, getSingupPage, getPrivatePost, getPrivateFeed,
} = require('./routing');
const { postSignup, postSignin, getLogout } = require('./auth');
const { getFeedPosts, getASinglePost, insertNewPosts } = require('./posts');
const { getUsersInfo } = require('./users');
const { getAllPostComments, insertNewComment } = require('./comments');
const {
  checkIsVotedPosts, checkIsVotedComments, addVotePost, addVoteComment
} = require('./votes');

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
  checkIsVotedPosts,
  checkIsVotedComments,
  addVotePost,
  addVoteComment,
  getLogout,
};
