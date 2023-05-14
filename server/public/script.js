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
let userInputs;
let answer;

function addNumbers(event){
    event.preventDefault();

    const firstValue = $('#first-value').val();
    const secondValue = $('#second-value').val();
    const operators = operator
    numbersFunction = (`<p> ${firstValue} ${operators} ${secondValue} </p>`)
    userInputs = firstValue + operators + secondValue
    answer = Function("return " + userInputs)();
    console.log(answer)
    console.log(userInputs);

    $.ajax({
        method: 'POST',
        url: '/numbers',
        data: {userInputs}
    }).then(function(response){
        console.log('posted numbers')
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
    $('#first-value').val('')
    $('#second-value').val('')
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
        console.log('getting answer was a success')
        renderToDom(answer);
    }).catch(function(error){
        alert('Error, I\'m a teapot trying to get an answer')
        console.log('request failed to get answer', error)
    })
}

function add(event){
    event.preventDefault();
    operator = '+'
}

function subtract(event){
    event.preventDefault();
    operator = '-'
}

function multiply(event){
    event.preventDefault();
    operator = '*'
}

function divide(event){
    event.preventDefault();
    operator = '/'
}


function renderToDom(){
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


