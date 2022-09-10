const connection = require('../../config/connection');

const checkIsVotedPost = (userId, postId) => connection.query(`select * from votes where user_id = '${userId}'  and  post_id = '${postId}'`);

module.exports = checkIsVotedPost;
