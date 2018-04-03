 const PORT = 8080;
 let express = require('express');
 let app = express();
 const path = require('path');
 const bodyParser = require('body-parser');
 app.use(bodyParser.json());
 app.use('/assets', express.static('assets'));

 app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/index.html'));
 });

 app.listen(PORT, () => {
   console.log(`server is up on port ${PORT}`);
 });


 app.get('/doubling', (req, res) => {
    res.json({
      recieved: req.query.input,
      result: doubling(req.query.input)
    });
 });

 let doubling = (i) => {
   return i * 2;
 };

 app.get('/greet', (req, res) => {
   const name = req.query.name;
   const title = req.query.title;
  if(name === undefined || title === undefined) {
    res.status(404);
    res.json({
      error: 'Please provide a name and a title!'
    });
  } else {
    res.json({
      welcome_message: `Oh, hi there ${name}, my dear ${title}`
    });
  };
});