const connection = require('../../config/connection');

const insertNewPost = (content, userId) => connection.query({
  text: 'INSERT INTO POSTS(CONTENT, USER_ID) VALUES($1, $2)',
  values: [content, userId],
});

module.exports = insertNewPost;
