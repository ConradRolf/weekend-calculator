$(document).ready(onReady);

function onReady() {
    console.log('We have jQuery! 💲💲💲');
    $('#equals-btn').on('click', addNumbers);
    // $('#equals-btn').on('click', postOperator)
    $('#clear-btn').on('click', clearInputs);
    $('#addition').on('click', add);
    $('#subtraction').on('click', subtract);
    $('#multiplication').on('click', multiply);
    $('#division').on('click', divide);
}

let operator;
let numbersFunction;

function dis(val) {
    $('#result').value += val
}

function myFunction(event) {
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        $('#result').value += event.key;
}

var cal = $('calcu');
        cal.onkeyup = function (event) {
            if (event.keyCode === 13) {
                console.log("Enter");
                let x = $('#result').val()
                console.log(x);
                solve();
            }
        }
  
        // Function that evaluates the digit and return result
        function solve() {
            let x = $('#result').val()
            let y = eval(x)
            $('#result').value = y
        }

function addNumbers(event){
    event.preventDefault();

    const firstValue = $('#first-value').val();
    const secondValue = $('#second-value').val();
    const operators = operator
    numbersFunction = (`<p> ${firstValue} ${operators} ${secondValue} </p>`)

    $.ajax({
        method: 'POST',
        url: '/numbers',
        data: {
            firstValue,
            secondValue,
            operators
        }
    }).then(function(response){
        getAnswer(response);
    }).catch(function(error){
        alert('Error, I\'m a teapot trying to post numbers!');
        console.log('Error with numbers', error);
    })
}

// .then(function(response){
    //     console.log('success');
    //     getNumbers();
    // })

// function postOperator(event){
//     event.preventDefault();

//     const operators = operator

//     $.ajax({
//         method: 'POST',
//         url: '/numbers',
//         data: {
//             operators
//         }
//     }).then(function(response){
//         console.log('success', response)
//     }).catch(function(error){
//         alert('Error, I\'m a teapot trying to post operators!');
//         console.log('Error with operators', error);
//     })
// }

function clearInputs(event){
    event.preventDefault();
    $('#result').val('')
}

// function getNumbers(){
//     $.ajax({
//         method: 'GET',
//         url: '/numbers'
//     }).then(function(numbers){
//         console.log('Success', numbers)
//         renderToDom(numbers)
//     }).catch(function(error){
//         alert('Error, I\'m a teapot trying to get numbers')
//         console.log('request failed to get numbers', error)
//     })
// }

function getAnswer(){
    $.ajax({
        method: 'GET',
        url: '/answer'
    }).then(function(answer){
        console.log('success', answer)
        renderToDom(answer);
    }).catch(function(error){
        alert('Error, I\'m a teapot trying to get an answer')
        console.log('request failed to get answer', error)
    })
}

function add(event){
    event.preventDefault();
    // for (let number of numbers){
    //     result = number.firstValue*1 + number.secondValue*1
    //     renderToDom('+');
    // }
    operator = '+'
}

function subtract(event){
    event.preventDefault();
    // for (let number of numbers){
    //     result = number.firstValue - number.secondValue
    //     renderToDom('-');
    // }
    operator = '-'
}

function multiply(event){
    event.preventDefault();
    // for (let number of numbers){
    //     result = number.firstValue * number.secondValue
    //     renderToDom('*');
    // }
    operator = '*'
}

function divide(event){
    event.preventDefault();
    // for (let number of numbers){
    //     result = number.firstValue / number.secondValue
    //     renderToDom('/');
    // }
    operator = '/'
}


function renderToDom(answer){
    $('#result-list').append(numbersFunction, answer)
}

// function doTheMath(numbers){
//     for (let number of numbers){
//         if (operator === 'add'){
//             console.log(number.firstValue*1 + number.secondValue*1)
//         }
//         else if (operator === 'subtract'){
//             console.log(number.firstValue - number.secondValue)
//         }
//         else if (operator === 'multiply'){
//             console.log(number.firstValue * number.secondValue)
//         }
//         else if (operator === 'divide'){
//             console.log(number.firstValue / number.secondValue)
//         }
//     }
// }


