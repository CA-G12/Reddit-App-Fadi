const {
  getSinginPage, getSingupPage, getPrivatePost, getPrivateFeed,
} = require('./routing');
const { postSignup, postSignin } = require('./auth');

module.exports = {
  getSinginPage,
  getSingupPage,
  postSignup,
  postSignin,
  getPrivatePost,
  getPrivateFeed,
};
