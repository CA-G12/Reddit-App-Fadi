const { getAllPostsComments, insertNewCommentQuery } = require('../database/quires');

const getAllPostComments = (req, res, next) => {
  const { postId } = req.params;
  getAllPostsComments(postId)
    .then((data) => res.send(data.rows))
    .catch((err) => next(err));
};

const insertNewComment = (req, res, next) => {
  const { content, userId, postId } = req.body;
  insertNewCommentQuery(content, userId, postId)
    .then(() => res.status(201).send('Inserted'))
    .catch((err) => next(err));
};

module.exports = { getAllPostComments, insertNewComment };
