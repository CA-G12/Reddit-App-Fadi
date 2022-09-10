const connection = require('../../config/connection');

const checkIsVotedComment = (userId, commentId) => connection.query(`select vote from votes where user_id = '${userId}' and  comment_id = '${commentId}'`);

module.exports = checkIsVotedComment;
