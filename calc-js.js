function add(...args) {
    let add = 0;
    for (arg of args) {
        add += arg;
    }
    return add;
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

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('mousedown', function(e) {
        e.target.style.backgroundColor = '#918489';
    })
    number.addEventListener('mouseup', function(e) {
        e.target.style.backgroundColor = '#5B5255';
    })
    number.addEventListener('click', () => {
        let selectedNumber = number.innerText;
        console.log("You clicked on "+selectedNumber);
        console.log(document.getElementById('display'));
        document.getElementById('display').innerText=selectedNumber;
    })
});

const equal = document.querySelector('.equal');
equal.addEventListener('mousedown', function(e) {
        e.target.style.backgroundColor = '#db97ac';
});
equal.addEventListener('mouseup', function(e) {
        e.target.style.backgroundColor = '#E16389';
});

