const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

const bodyParser = require('body-parser');

let userInputs = [];

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/postInputs', function(req, res){
        let answer;
            if (req.body.operators === '+'){
                answer = req.body.firstValue*1 + req.body.secondValue*1
            }
            else if (req.body.operators === '-'){
                answer = req.body.firstValue - req.body.secondValue
            }
            else if (req.body.operators === '*'){
                answer = req.body.firstValue * req.body.secondValue
            }
            else if (req.body.operators === '/'){
                answer = req.body.firstValue / req.body.secondValue
            }
        userInputs.push(`<p>${req.body.firstValue} ${req.body.operators} ${req.body.secondValue} = ${answer}`)
    res.sendStatus(201);
}).then 

app.get('/answer', function(req, res){
    res.send(userInputs);
})

app.listen(port, () => {
    console.log('listening on port', port);
})
