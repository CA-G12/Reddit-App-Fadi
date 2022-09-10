const connection = require('../../config/connection');

const addVotePosts = (userId, vote, postId) => connection.query({
  text: 'insert into votes(user_id, vote, post_id) values ($1, $2, $3)',
  values: [userId, vote, postId],
});

module.exports = addVotePosts;
