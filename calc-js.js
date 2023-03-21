function add(...args) {
    let add = 0;
    for (arg of args) {
        add += arg;
    }
    return add;
}

function suma(a, b){
    return a+b;
}

function substract(first, ...args) {
    let diff = first;
    for (arg of args) {
        diff -= arg;
    }
    return diff;
}

function multiply(...args) {
    let product = 1;
    for (arg of args) {
        product *= arg;
    }
    return product;
}

function divide(first, ...args) {
    let quotient = first;
    for (arg of args) {
        quotient /= arg;
    }
    return quotient;
}

function sqrt(number){
    return Math.sqrt(number); 
}

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('mousedown', function(e) {
        e.target.style.backgroundColor = '#918489';
    })
    operator.addEventListener('mouseup', function(e) {
        e.target.style.backgroundColor = '#71686B';
    })
});


let selectedNumber = 0;
let result = 0;
const numbers = document.querySelectorAll('.number');
    numbers.forEach((number) => {
        number.addEventListener('mousedown', function(e) {
            e.target.style.backgroundColor = '#918489';
        })
        number.addEventListener('mouseup', function(e) {
            e.target.style.backgroundColor = '#5B5255';
        })
        number.addEventListener('click', () => {
            //shows the selected number on display
            selectedNumber = parseFloat(number.innerText);
            document.getElementById('display').innerText=selectedNumber;
            console.log(typeof(selectedNumber));
            console.log("You clicked on "+selectedNumber);
            result = suma(result, selectedNumber);
            console.log("The current result value is "+result);
            return selectedNumber;
        })
    });

document.querySelector('#clear').addEventListener('click', () => {
    document.getElementById('display').innerText=0;
    result = 0;
    //console.clear();
    console.log("You cleared the memory.");
})

const sum = document.querySelector('#add');
    sum.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('add').innerText);
        console.log("The current result value is "+result);
        return result;
    })

const equal = document.querySelector('#equal');
    equal.addEventListener('mousedown', function (e) {
        e.target.style.backgroundColor = '#db97ac';
    });
    equal.addEventListener('mouseup', function (e) {
        e.target.style.backgroundColor = '#E16389';
    });
    equal.addEventListener('click', () => {
        document.getElementById('display').innerText = result;
        console.log("The total is now " + result);
    });