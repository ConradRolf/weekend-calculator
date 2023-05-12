const express = require('express');

const app = express();

const PORT = 5000;

const bodyParser = require('body-parser');

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/numbers', function(req, res) {
  console.log('Request for numbers was made');
  res.send(numbers);
})

app.post('/numbers', function(req, res){
  numbers.push(req.body);
  res.sendStatus(201);
})

app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
