const { getSinginPage, getSingupPage } = require('./routing');
const { postSignup, postSignin } = require('./auth');

module.exports = {
  getSinginPage,
  getSingupPage,
  postSignup,
  postSignin,
};
