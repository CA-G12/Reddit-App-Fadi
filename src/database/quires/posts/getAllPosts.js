const connection = require('../../config/connection');

const getAllPosts = () => connection.query('select users.username, users.avatar, users.id, posts.content, posts.id, sum(vote) as votes from users right join posts on users.id = posts.user_id join votes on users.id = votes.user_id group by users.id, posts.id');

module.exports = getAllPosts;


/*
select users.username, users.avatar, users.id, posts.content, posts.id, sum(vote) from users right join posts on users.id = posts.user_id join votes on users.id = votes.user_id group by users.id, posts.id

*/