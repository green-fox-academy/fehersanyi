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


 app.post('/arrays', (req, res) => {
   let what = req.body.what;
   let numbers = req.body.numbers;
   console.log(typeof numbers)
   console.log(what)
   if (what === "sum") {
     res.json({
       resoult: sum(req.body.numbers)
     })
   } else if (what === 'multiply') {
     res.json(mult(numbers))
   } else if (what === 'double') {
     res.json(dou(numbers))
   } else if (what === undefined) {
     res.json({
       error: 'Please provide what to do with the numbers!'
     });
   };
 });

 let sum = (ns) => {
   return ns.reduce((a, b) => {
     a + b
   });
 }

 let mult = (ns) => {
   let value = 1;
   console.log(ns.length)
   for (let i = 0; i < ns.length; i++) {
     console.log(typeof ns[i]);
     value = value * ns[`${i}`];
   }
   return value;
 };
 let dou = (ns) => {
   let value = [];
   console.log(ns.length)
   for (let i = 0; i < ns.length; i++) {
     console.log(typeof ns[i]);
     value[i].push(ns[i]);
   }
   return value;
 };

 app.post('/sith', (req, res) => {
   let text = req.body.text;
   if (text === undefined) {
     res.json({
       error: 'Feed me some text you have to, padawan young you are. Hmmm.'
     })
   } else {
     res.json({
       sith_text: yodaStyle(text)
     })
   }
 })
 let randomstuff = ['hmmmmmm', 'arrgh', 'err'];
 let yodaStyle = (text) => {
   let value = []
   let sentences = text.concat(' ').split('. ')
   for (let i = 0; i < sentences.length - 1; i++) {
     let wiseWords = sentences[i].split(' ');
     let j = 0;
     while (wiseWords[j] !== undefined) {
       let tempWords = '';
       if (wiseWords[j + 1] !== undefined) {
         tempWords = wiseWords[j];
         wiseWords[j] = wiseWords[j + 1];
         wiseWords[j + 1] = tempWords;
       }
       value.push(wiseWords[j]);
       value.push(wiseWords[j + 1]);
       j += 2;
     }
     value.push(randomstuff[Math.floor(Math.random() * 3)]);
   }

   return value.join(' ').toLowerCase();
 }