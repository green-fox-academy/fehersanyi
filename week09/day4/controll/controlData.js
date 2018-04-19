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
        res.setHeader('Location', '/api/questions/');
        res.sendStatus(201);
      }
    });

    data.addAnswers(questionQuey, (err, answer) => {
      if (err !== null) {
        res.sendStatus(500);
      } else {
        res.setHeader('Location', '/api/answers/');
        res.sendStatus(201);
      }
    })
  },

  getQuestions(req, res) {
    data.getQuestions((err, questions) => {
      if (err !== null) {
        res.sendStatus(500);
      } else {
        res.json(questions);
      }
    });
  },

}