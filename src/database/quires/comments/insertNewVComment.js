const connection = require('../../config/connection');

const insertNewCommentQuery = (content, userId, postId) => connection.query({
  text: 'INSERT INTO COMMENTS(CONTENT, USER_ID, POST_ID) VALUES ($1, $2, $3)',
  values: [content, userId, postId],
});

module.exports = insertNewCommentQuery;
