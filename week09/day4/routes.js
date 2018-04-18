const express = require('express');
const app = express();
const controll = require('./controll/controlData');

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/questions', controll.getQuestions);



module.exports = app;