const Joi = require('joi');
require('dotenv').config();

const validateSignup = (body) => {
  const schema = Joi.object({
    username: Joi.string().pattern(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/).required(),
    password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
    avatar: Joi.string().pattern(/(https?:\/\/.*\.(?:png|jpg))/i).required(),
  });

  return schema.validateAsync(body);
};

const validateSignin = (body) => {
  const schema = Joi.object({
    username: Joi.string().pattern(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/).required(),
    password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
  });
  return schema.validateAsync(body);
};

module.exports = {
  validateSignup,
  validateSignin,
};
