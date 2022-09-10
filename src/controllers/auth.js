const CustomizedError = require('../errors/customizedError');
const {
  validateSignup,
  validateSignin,
  generateAccessToken,
  hashPassword,
  comparePasswords,
} = require('../helpers');
const {
  getUserQuery,
  insertNewUserQuery,
  getUsername,
} = require('../database/quires/index');

const postSignup = (req, res, next) => {
  getUsername(req.body.username)
    .then((username) => {
      if (username.rows.length !== 0) throw new CustomizedError(400, 'Bad request: user already exists');
      validateSignup(req.body)
        .then(() => {
          hashPassword(req.body.password)
            .then((hashedPassword) => {
              insertNewUserQuery({ ...req.body, password: hashedPassword })
                .then(() => res.status(201).json({ username: req.body.username, msg: 'inserted!' }))
                .catch((err) => next(err));
            }).catch((err) => next(err));
        }).catch((err) => next(new CustomizedError(400, `Bad request: ${err.details[0].message}`)));
    }).catch((err) => next(err));
};

const postSignin = (req, res, next) => {
  validateSignin(req.body)
    .then((data) => {
      if (data.error) throw new CustomizedError(400, data.error.details[0].message);
      getUserQuery(req.body.username)
        .then((userInfo) => {
          if (userInfo.rows.length > 0) {
            const user = userInfo.rows[0];
            comparePasswords(req.body.password, user.password)
              .then((confirmed) => {
                if (confirmed) {
                  const token = generateAccessToken({
                    username: user.username,
                    id: user.id,
                  });
                  res.cookie('token', token).json('SignedIn');
                } else throw next(new CustomizedError(401, 'Wrong Credentials'));
              }).catch((err) => next(err));
          } else {
            throw new CustomizedError(401, 'Wrong Credentials');
          }
        }).catch((err) => next(err));
    }).catch((err) => next(new CustomizedError(400, `Bad request: ${err.details[0].message}`)));
};
const getLogout = (req, res, next) => {
  try {
    res.clearCookie('token');
    res.status(301).redirect('/');
  } catch (err) {
    next(err);
  }
};

module.exports = {
  postSignup,
  postSignin,
  getLogout,
};
