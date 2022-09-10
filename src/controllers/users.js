const { getUserProfileInfo, getUsersIdQuery } = require('../database/quires');

const getUsersInfo = (req, res, next) => {
  const { username } = req.params;
  getUserProfileInfo(username)
    .then((data) => res.send(data.rows))
    .catch((err) => next(err));
};
const getUserId = (req, res, next) => {
  const { username } = req.query;
  getUsersIdQuery(username)
    .then((data) => res.send(data.rows))
    .catch((err) => next(err));
};

module.exports = { getUsersInfo, getUserId };
