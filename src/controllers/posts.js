const { getAllPosts, getSinglePost, insertNewPost} = require('../database/quires');

const getFeedPosts = (req, res, next) => {
  getAllPosts()
    .then((data) => res.send(data.rows))
    .catch((err) => next(err));
};

const getASinglePost = (req, res, next) => {
  const { id } = req.params;
  getSinglePost(id)
    .then((data) => res.send(data.rows))
    .catch((err) => next(err));
};

const insertNewPosts = (req, res, next) => {
  const { content, userId } = req.body;
  insertNewPost(content, userId)
    .then(() => res.status(201).send('Inserted!'))
    .catch((err) => next(err));
};

module.exports = { getFeedPosts, getASinglePost, insertNewPosts };
