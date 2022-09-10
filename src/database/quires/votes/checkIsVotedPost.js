const connection = require('../../config/connection');

const checkIsVotedPost = (userId, postId) => connection.query(`select posts.content, posts.id, votes.user_id from posts right join votes on posts.id = votes.post_id where votes.user_id='${userId}' and posts.id = '${postId}' group by posts.id, votes.user_id`);

module.exports = checkIsVotedPost;
