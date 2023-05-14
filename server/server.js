
const express = require('express');

const app = express();

const port = 5000;

const bodyParser = require('body-parser');

let numbers = [];

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/numbers', function(req, res){
    numbers.push(req.body);
    res.sendStatus(201);
})

// app.get('/numbers', function(req, res) {
//     console.log('Request for numbersOperator was made');
//     res.send(numbers);
// })

app.get('/answer', function(req, res){
    res.send(answer);
})

// req.body.*value*, allows you to target parts of the req.body

app.listen(port, () => {
    console.log('listening on port', port);
})

let answer = doTheMath(numbers);

function doTheMath(){
    for (let number of numbers){
        if (number.operators === '+'){
            answer = number.firstValue*1 + number.secondValue*1
        }
        else if (number.operators === '-'){
            answer = number.firstValue - number.secondValue
        }
        else if (number.operators === '*'){
            answer = number.firstValue * number.secondValue
        }
        else if (number.operators === '/'){
            answer = number.firstValue / number.secondValue
        }
    }
}
