const { validateSignup, validateSignin } = require('../helpers/signupValidation');
const CustomizedError = require('../error/customizedError');
const getAllUsersnameQuery = require('../database/quires/users/getAllUsersnameQuery');

const postSignup = (req, res, next) => {
  getAllUsersnameQuery()
    .then((usernames) => {
      usernames.rows.forEach((obj) => {
        if (req.body.username === obj.username) throw new Error(req.body.username);
      });
      validateSignup(req.body)
        .then((data) => {
          if (data.error) {
            throw new Error(data.error.details[0].message);
          } else {
            res.send('validated');
          }
        })
        .catch((err) => next(new CustomizedError(400, `Bad request: ${err}`)));
    }).catch((err) => next(new CustomizedError(400, `Bad request: ${err} already exists`)));
};

const postSignin = (req, res, next) => {
  validateSignin(req.body)
    .then((data) => {
      if (data.error) {
        throw new Error(data.error.details[0].message);
      } else {
        res.send('validated');
      }
    })
    .catch((err) => next(new CustomizedError(400, `Bad request: ${err}`)));
};

module.exports = {
  postSignup,
  postSignin,
};
