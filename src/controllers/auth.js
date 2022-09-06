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
  getAllUsernamesQuery,
} = require('../database/quires/index');

const postSignup = (req, res, next) => {
  getAllUsernamesQuery()
    .then((usernames) => {
      usernames.rows.forEach((obj) => {
        if (req.body.username === obj.username) throw new Error(req.body.username);
      });
      validateSignup(req.body)
        .then((data) => {
          if (data.error) {
            throw new Error(data.error.details[0].message);
          } else {
            hashPassword(req.body.password)
              .then((hashedPassword) => {
                insertNewUserQuery({ ...req.body, password: hashedPassword })
                  .then((addedRow) => res.status(201).send('Inserted Succuessfly!'))
                  .catch((err) => next(new CustomizedError(400, `Insertation Failed ${err}`)));
              })
              .catch((err) => next(new CustomizedError(400, `${err}`)));
          }
        })
        .catch((err) => next(new CustomizedError(400, `Bad request: ${err}`)));
    }).catch((err) => next(new CustomizedError(400, `Bad request: ${err} already exists`)));
};

const postSignin = (req, res, next) => {
  validateSignin(req.body)
    .then((data) => {
      if (data.error) throw new Error(data.error.details[0].message);
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
                } else {
                  res.status(401).json('Wrong Credentials');
                }
              }).catch((err) => next(new CustomizedError(401, `${err}`)));
          } else {
            res.status(401).json('Wrong Credentials');
          }
        }).catch((err) => next(new CustomizedError(401, `${err}`)));
    }).catch((err) => next(new CustomizedError(400, `Bad request: ${err}`)));
};

module.exports = {
  postSignup,
  postSignin,
};
