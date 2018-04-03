const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/api/hello', (req, res) => {
  console.log(req.query);
  const name = req.query.name || 'Guest';
  res.json({
    message: `heha ${name}`,
  });
});


const listMentors = (req, res) => {
  console.log(req);
  res.json(mentors);
};
app.get('/api/mentors', listMentors);

app.get('/api/mentors/:mentorID', (req, res) => {
  const mentor = mentors[req.params.mentorID - 1];
  if(mentor === undefined) {
    res.status(404);
    res.json({
      message: `no mentor with id ${req.params.mentorID} octocat is sad`
    });
  } else {
    res.json(mentor);
  };
});

const mentors = [
  {name: 'Istvan', age: 30},
  {name: 'Bence', age: 42},
  {name: 'balazskaxd', age: 27}
];

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});