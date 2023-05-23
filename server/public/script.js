$(document).ready(onReady);

function onReady() {
    console.log('We have jQuery! 💲💲💲');
    $('#equals-btn').on('click', addNumbers);
    $('#clear-btn').on('click', clearInputs);
    $('#addition').on('click', add);
    $('#subtraction').on('click', subtract);
    $('#multiplication').on('click', multiply);
    $('#division').on('click', divide);
    getAnswer();
}

let operator;

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

function addNumbers(event){
    event.preventDefault();

    const firstValue = $('#first-value').val();
    const secondValue = $('#second-value').val();
    const operators = operator

    $.ajax({
        method: 'POST',
        url: '/postInputs',
        data: {
            firstValue,
            secondValue,
            operators
        }
    }).then(function(response){
        console.log('posted numbers')
        getAnswer(response);
    }).catch(function(error){
        alert('Error, I\'m a teapot trying to post numbers!');
        console.log('Error with numbers', error);
    })
}

function clearInputs(event){
    event.preventDefault();
    $('#first-value').val('')
    $('#second-value').val('')
}

function getAnswer(){
    $.ajax({
        method: 'GET',
        url: '/answer'
    }).then(function(response){
        $('#result-list').empty();
        console.log('getting answer was a success')
        $('#result-list').append(response)
    }).catch(function(error){
        alert('Error, I\'m a teapot trying to get an answer')
        console.log('request failed to get answer', error)
    })
}
