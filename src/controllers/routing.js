const { join } = require('path');

const getSinginPage = (req, res) => {
  const path = join(__dirname, '..', '..', 'public', 'signin', 'index.html');
  res.sendFile(path);
};

const getSingupPage = (req, res) => {
  const path = join(__dirname, '..', '..', 'public', 'signup', 'index.html');
  res.sendFile(path);
};

module.exports = {
  getSinginPage,
  getSingupPage,
};
