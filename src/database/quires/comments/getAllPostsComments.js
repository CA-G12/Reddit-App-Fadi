const connection = require('../../config/connection');

const getAllPostsComments = (postId) => connection.query(`select username, avatar, content  from comments left join users on  comments.user_id = users.id where comments.post_id = '${postId}' order by comments.id desc`);

module.exports = getAllPostsComments;
