const {
  checkIsVotedComment,
  checkIsVotedPost,
  addVoteComments,
  addVotePosts,
} = require('../database/quires');

const checkIsVotedPosts = (req, res, next) => {
  const { userId, postId } = req.body;
  checkIsVotedPost(userId, postId)
    .then((data) => {
      res.status(200).send(data.rows);
    }).catch((err) => next(err));
};

const checkIsVotedComments = (req, res, next) => {
  const { userId, commentId } = req.body;
  checkIsVotedComment(userId, commentId)
    .then((data) => res.send(data.rows))
    .catch((err) => next(err));
};

const addVotePost = (req, res, next) => {
  console.log(req.body);
  const { vote, userId, postId } = req.body;
  addVotePosts(vote, userId, postId)
    .then((data) => res.send('Inserted'))
    .catch((err) => next(err));
};

const addVoteComment = (req, res, next) => {
  const { vote, userId, commentId } = req.body;
  addVoteComments(vote, userId, commentId)
    .then((data) => res.send(data.rows))
    .catch((err) => next(err));
};

module.exports = {
  checkIsVotedPosts,
  checkIsVotedComments,
  addVotePost,
  addVoteComment,
};
