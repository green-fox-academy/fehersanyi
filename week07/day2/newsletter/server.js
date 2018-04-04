const PORT = 3000;
let express = require('express');
let app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser());

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/signup', (req, res) => {
  res.send(`<h1>Thanks ${req.body.username}, we will send updates to ${req.body.email}</h1>`);
});
