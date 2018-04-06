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
    })
  }

  getRedditPost(callback) {
    this.connection.query('SELECT * FROM posts', (error, results) =>{
      if(error !== null) {
        return callback(error);
      } else {
        return callback(null, results);
      }
    })
  };
};

module.exports = new redditPost();