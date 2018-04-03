 const PORT = 3000;
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
    kiskacsa: req.query.input,
    result: doubling(req.query.input)
  });
 });

 let doubling = (i) => {
   return i * 2;
 };