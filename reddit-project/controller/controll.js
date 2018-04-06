
const postModell = require('../modell/posts');

module.exports = {
  addRedditPost: (req, res) => {
    let postData = {
      title: req.body.title,
      author: req.body.author,
      date: req.body.date
    };

    postModell.addRedditPost(postData, (error, adddedPost) => {
      if (error !== null) {
        res.sendStatus(error.code === "HEHA"
      ? 409
      : 500);
      }
      else {
        res.setHeader('Location', `/posts/`);
        res.sendStatus(201);
      }
    });
  },

  getRedditPost(req, res) {
    postModell.getRedditPost((error, posts) => {
      if (error !== null) {
        res.sendStatus(500);
      }
      else {
        res.json(posts);
      }
    });
  }
};