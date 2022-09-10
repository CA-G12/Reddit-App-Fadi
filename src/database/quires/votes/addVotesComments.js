const connection = require('../../config/connection');

const addVoteComments = (userId, vote, commentId) => connection.query({
  text: 'insert into votes(user_id, vote, comment_id) values ($1, $2, $3)',
  values: [userId, vote, commentId],
});

module.exports = addVoteComments;
