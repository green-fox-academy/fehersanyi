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
       error: 'Please provide an input!'
     });
   } else {
     res.json({
       received: parseInt(recieved),
       result: doubling(recieved)
     });
   }
 });

 let doubling = (i) => {
   return i * 2;
 };

 app.get('/greeter', (req, res) => {
   const name = req.query.name;
   const title = req.query.title;
   if (name === undefined) {
     res.json({
       error: 'Please provide a name!'
     });
   } else if (title === undefined) {
     res.json({
       error: 'Please provide a title!'
     })
   } else {
     res.json({
       welcome_message: `Oh, hi there ${name}, my dear ${title}!`
     });
   };
 });


 app.get('/appenda/:appendable', (req, res) => {
   const appendable = req.params.appendable;
   if (appendable === undefined) {
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
   let until = req.query.until;
   if (req.params.operator === 'sum') {
     res.json(
       summer(until)
     );
   };
   if (req.params.operator === 'factor') {
     res.json(
       factor(until)
     );
   };
 });

 let summer = (n) => {
   let result = 0;
   for (let i = 0; i <= n; i++) {
     result += i;
   };
   return result;
 };

 let factor = (n) => {
   let value = 1;
   for (let i = 0; i < n; i++) {
     value = value * (n - i)
   }
   return value;
 };


 app.post('/arrays/:operation', (req, res) => {
  let what = req.params.operation;
  let numbers = req.query.numbers
  if(what === 'sum') {
    res.json(sum(numbers))
  }
  else if(what === 'multiply') {}
  else if(what === 'double') {}
  else if(what === undefined) {
    res.json({
      error: 'Please provide what to do with the numbers!'
    });
  };
 });

 let sum = (array) => {
   let value = 0;
   for(let i = 0; i < array.lenght; i++) {
    value += array[i];
   }
   return value;
 }