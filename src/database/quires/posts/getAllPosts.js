const connection = require('../../config/connection');

const getAllPosts = () => connection.query('select username, avatar, posts.content, posts.id as post_id, users.id as user_id from users right join posts on users.id = posts.user_id order by posts.id desc');

module.exports = getAllPosts;
