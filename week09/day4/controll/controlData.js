const data = require('../model/data');

module.exports = {
    addQuestion: (req, res) => {
      questionQuey = {
        question: req.body.question
      };

      answerQuey = {
        answer: req.body.answer
      };

      data.addNewQuestion(questionQuey, (err, question) => {
        if (err !== null) {
          res.sendStatus(500);
        } else {
          res.setHeader('Location', '/questions/');
          res.sendStatus(201);
        }
      });

      data.addAnswers(questionQuey, (err, answer) => {
        if (err !== null) {
          res.sendStatus(500);
        } else {
          res.setHeader('Location', '/answers/');
          res.sendStatus(201);
        }
      });


    }
}