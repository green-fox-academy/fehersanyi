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
   const recieved = req.query.input;
   if (recieved === undefined) {
     res.json({
       error: 'please give me something!'
     });
   } else {
     res.json({
       recieved: recieved,
       result: doubling(recieved)
     });
   }
 });

 let doubling = (i) => {
   return i * 2;
 };

 app.get('/greet', (req, res) => {
   const name = req.query.name;
   const title = req.query.title;
   if (name === undefined || title === undefined) {
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


 app.get('/append', (req, res) => {
   const appendable = req.query.appendable
   if (appendable === undefined) {
     res.status(404);
     res.json({
       error: 'Please provide a word!'
     });
   } else {
     res.json({
       appended: pendIt(appendable)
     });
   };
 });

 let pendIt = (w) => {
   return `${w}a`
 }

 app.post('/dountil/:operator', (req, res) => {
   let n = req.query.until;
   if (req.params.operator === 'sum') {
     res.json(
       summer(n)
     );
   };
   if(req.params.operator === 'factor') {
     res.json(
       factor(n)
     );
   };
 });

 let summer = (n) => {
   let result = 0;
   for (let i = 0; i <= until; i++) {
     result += i;
   };
   return result;
 };

 let factor = () => {
   
 };