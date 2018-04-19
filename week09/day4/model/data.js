require('dotenv').config();
let mysql = require('mysql');

const connectionDetails = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

class quizSql {

  constructor() {
    this.connection = mysql.createConnection(connectionDetails)
  };

  getQuestions(callback) {
    this.connection.query('SELECT * FROM questions, answers WHERE questions.id = answers.question_id; ', (err, res) => {
      if (err !== null) {
        return callback(err);
      } else {
        return callback(null, res);
      }
    });
  };

  addNewQuestion(newQuestion, callback) {
    const addStatement = {
      query: 'INSERT INTO questions (question) VALUES (?)',
      value: questionQuery
    };

    this.connection.query(addStatement.query, addStatement.values, (err, res, fields) =>{
      if(err !== null) {
        return callback(err);
      } else {
        return callback(null, res);
      }
    });
  };

  addAnswers(newAnswers, callback) {
    const addStatement = {
      query: 'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, ?)',
      value: [questionId, answer, isCorrect]
    }

    this.connection.query(addStatement.query, addStatement.values, (err, res, fields) =>{
      if(err !== null) {
        return callback(err);
      } else {
        return callback(null, res);
      }
    });
  };


};

module.exports = new quizSql();