let mysql = require('mysql');

const connectionDetails = {
  host: 'localhost',
  user: 'root',
  password: 'snes',
  database: 'reddit'
};

class redditPost {

  constructor() {
    this.connection = mysql.createConnection(connectionDetails);
  }

  addRedditPost(postData, callback) {
    const insertStatement = {
      query: 'INSERT INTO posts (post_title, post_author, date_of_post) VALUES (?, ?, ?)',
      values: [postData.title, postData.author, postData.date]
    };

    this.connection.query(insertStatement.query, insertStatement.values, (error, result, fields) => {
      if (error !== null) {
        return callback(error);
      }
      return callback(null, redditPost);
    });
  };

  getRedditPost(callback) {
    this.connection.query('SELECT * FROM posts', (error, results) => {
      if (error !== null) {
        return callback(error);
      } else {
        return callback(null, results);
      }
    });
  };

  upVotePost(voteData, callback) {
    this.connection.query('SELECT likes FROM posts WHERE post_id = ?', [voteData.id], (error, result) => {
      if (error !== null) {
        console.log(error);
        return callback(error);
      } else {
        console.log(result);
        const upVoteStatement = {
          query: `UPDATE posts SET likes = ${result[0].likes + 1} WHERE post_id = ?`,
          values: [voteData.id]
        };
        this.connection.query(upVoteStatement.query, upVoteStatement.values, (error, result, fields) => {
          if (error !== null) {
            console.log(error);
            return callback(error);
          }
          return callback(null, redditPost);
        });
      }
    })
  };
  downVotePost(voteData, callback) {
    this.connection.query('SELECT likes FROM posts WHERE post_id = ?', [voteData.id], (error, result) => {
      if (error !== null) {
        console.log(error);
        return callback(error);
      } else {
        console.log(result);
        const upVoteStatement = {
          query: `UPDATE posts SET likes = ${result[0].likes - 1} WHERE post_id = ?`,
          values: [voteData.id]
        };
        this.connection.query(upVoteStatement.query, upVoteStatement.values, (error, result, fields) => {
          if (error !== null) {
            console.log(error);
            return callback(error);
          }
          return callback(null, redditPost);
        });
      }
    })
  };
};

module.exports = new redditPost();