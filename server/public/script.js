$(document).ready(onReady);

function onReady() {
    console.log('We have jQuery! 💲💲💲');
    $('#equals-btn').on('submit', addNumbers);
    $('#clear-btn').on('click', clearInputs);
    $('#addition').on('click', add);
    $('#subtraction').on('click', subtract);
    $('#multiplication').on('click', multiply);
    $('#division').on('click', divide);
}

function addNumbers(event){
    event.preventDefault();

    const firstValue = $('#first-value').val();
    const secondValue = $('#second-value').val();

    $.ajax({
        method: 'POST',
        url: '/numbers',
        data: {
            firstValue: firstValue,
            secondValue: secondValue
        }
    }).then(function(response){
        console.log('success')
        getNumbers(response);
    }).catch(function(error){
        alert('Error, I\'m a teapot!');
        console.log('Error with numbers', error);
    })
}

function clearInputs(){
    $('#first-value').val('')
    $('#second-value').val('')
}

function getNumbers(){
    $.ajax({
        method: 'GET',
        url: '/numbers'
    }).then(function(response){
        console.log('Success', response)
        numbers = response;
    }).catch(function(error){
        alert('Error, I\'m a teapot')
        console.log('request failed to get numbers', error)
    })
}

let result;
let numbers;

function add(numbers){
    for (let number of numbers){
        result = Number(number.firstValue) + Number(number.secondValue)
        renderToDom('+');
    }
}

function subtract(numbers){
    for (let number of numbers){
        result = Number(number.firstValue) - Number(number.secondValue)
        renderToDom('-');
    }
}

function multiply(numbers){
    for (let number of numbers){
        result = Number(number.firstValue) * Number(number.secondValue)
        renderToDom('*');
    }
}

function divide(numbers){
    for (let number of numbers){
        result = Number(number.firstValue) / Number(number.secondValue)
        renderToDom('/');
    }
}

function renderToDom(asmd){
    $('#result').text(result)
    $('#result-list').append(`
    <li>${number.firstValue} ${asmd} ${number.secondValue} = ${result}</li>
    `)
}

// function doTheMath(numbers){
//     for (let number of numbers){
//         if (asmd === a){
//             console.log(eval(number.firstValue + number.secondValue))
//         }
//         else if (asmd === s){
//             console.log(eval(number.firstValue - number.secondValue))
//         }
//         else if (asmd === m){
//             console.log(eval(number.firstValue * number.secondValue))
//         }
//         else if (asmd === d){
//             console.log(eval(number.firstValue / number.secondValue))
//         }
//     }
// }

//function renderToDom(){

//}

