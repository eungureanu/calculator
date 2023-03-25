function add(a, b){
    return b+a;
}

function substract(b, a){
    return b-a;
}

function multiply(a, b) {
    return b*a;
}

function divide(b, a) {
    return b/a;
}

function squareRoot(a){
    return Math.sqrt(a); 
}
let a="";
let b="";
let clickedNumber = 0;
let result=0;
let lastOperation;
let inputs=[];

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
            clickedNumber = number.innerText;
            a=a+clickedNumber;
            document.getElementById('display').innerText=a;
            console.log("You clicked on "+clickedNumber);
            console.log("a is now "+a);
            console.log("b is now "+b);
            console.log("result is now "+ result);
            // console.log(typeof(a));
            return a;
        })
    });  

document.querySelector('#clear').addEventListener('click', () => {
    document.getElementById('display').innerText=0;
    a="";
    b="";
    result=0;
    inputs=[];
    //console.clear();
    console.log("You cleared the memory.");
})

const sum = document.querySelector('#plus');
    sum.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('plus').innerText);        
        inputs.push(a);
        inputs.push("+");
        a="";
        console.log("a is now "+a);
        console.log("inputs is now "+ inputs);

    })

const diff = document.querySelector('#minus');
    diff.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('plus').innerText);        
        inputs.push(a);
        inputs.push("-");
        a="";
        console.log("a is now "+a);
        console.log("inputs is now "+ inputs);
    })

const product = document.querySelector('#multiply');
    product.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('plus').innerText);        
        inputs.push(a);
        inputs.push("*");
        a="";
        console.log("a is now "+a);
        console.log("inputs is now "+ inputs);
    })

const division = document.querySelector('#divide');
    division.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('plus').innerText);        
        inputs.push(a);
        inputs.push("/");
        a="";
        console.log("a is now "+a);
        console.log("inputs is now "+ inputs);
    })

const sqrt = document.querySelector('#sqrt');
    sqrt.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('sqrt').innerText);
        result = squareRoot(a);
        console.log(result);
        document.getElementById('display').innerText=result;
    })

const posNeg = document.querySelector('#pos-neg');
    posNeg.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('pos-neg').innerText);
        if (a > 0) {
            a="-"+a;
            document.getElementById('display').innerText=a;
            console.log("a is now"+a);
        } else if (a < 0) {
            a=a.slice(1);
            document.getElementById('display').innerText=a;
            console.log("a is now"+a);
        }
    })

const equal = document.querySelector('#equal');
    equal.addEventListener('mousedown', function (e) {
        e.target.style.backgroundColor = '#db97ac';
    });
    equal.addEventListener('mouseup', function (e) {
        e.target.style.backgroundColor = '#E16389';
    });
    equal.addEventListener('click', () => {
        inputs.push(a);
        console.log("inputs is now "+ inputs);
        for (i=0; i<=inputs.length; i++){
            if (inputs[1]=="+"){
                result=add(parseFloat(inputs[0]), parseFloat(inputs[2]));
                inputs.splice(0, 3, result);
            } else if (inputs[1]=="-"){
                result=substract(parseFloat(inputs[0]), parseFloat(inputs[2]));
                inputs.splice(0, 3, result);
            } else if (inputs[1]=="/"){
                result=divide(parseFloat(inputs[0]), parseFloat(inputs[2]));
                inputs.splice(0, 3, result);
            } else if (inputs[1]=="*"){
                result=multiply(parseFloat(inputs[0]), parseFloat(inputs[2]));
                inputs.splice(0, 3, result);
            }
        }
        console.log("inputs is now finally "+ inputs);
        //This below is so that the user can continue to perform calculations on the result
        a=result;
        inputs=[];
        console.log("a is now");
        console.log(result);
        document.getElementById('display').innerText=result;
    });