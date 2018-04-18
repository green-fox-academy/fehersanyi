const postModell = require('../modell/posts');

module.exports = {
  addRedditPost: (req, res) => {
    let postData = {
      title: req.body.title,
      url: req.body.url,
      author: req.body.author,
    };
    
    postModell.addRedditPost(postData, (error, addedPost) => {
      if (error !== null) {
        res.sendStatus(500);
      } else {
        res.setHeader('Location', `/posts/`);
        res.sendStatus(201);
      }
    });
  },

  getRedditPost(req, res) {
    postModell.getRedditPost((error, posts) => {
      if (error !== null) {
        res.sendStatus(500);
      } else {
        res.json(posts);
      }
    });
  },

  upVotePost(req, res) {
    let voteData = {
      id: req.params.id
    };
    postModell.upVotePost(voteData, (error, votedPost) => {
      if (error !== null) {
        res.sendStatus(error.code === "HEHA" ?
          409 :
          500);
      } else {
        res.setHeader('Location', `/posts/`);
        res.sendStatus(201);
      }
    })
  },

  downVotePost(req, res) {
    let voteData = {
      id: req.params.id
    };
    postModell.downVotePost(voteData, (error, votedPost) => {
      if (error !== null) {
        res.sendStatus(error.code === "HEHA" ?
          409 :
          500);
      } else {
        res.setHeader('Location', `/posts/`);
        res.sendStatus(201);
      }
    })
  }

}