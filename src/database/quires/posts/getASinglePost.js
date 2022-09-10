const connection = require('../../config/connection');

const getSinglePost = (postId) => connection.query(`select username, avatar, posts.content from users right join posts on users.id = posts.user_id where posts.id = '${postId}'`);

module.exports = getSinglePost;
