let a="";
let clickedNumber = 0;
let result=0;
let inputs=[];
let decimal = false;

function add(a, b){
    const decimalPlaces = Math.max((a.toString().split('.')[1] || '').length, (b.toString().split('.')[1] || '').length);
    const int1 = Math.round(a * Math.pow(10, decimalPlaces));
    const int2 = Math.round(b * Math.pow(10, decimalPlaces));
    const resultInt = int1 + int2;
    return (resultInt / Math.pow(10, decimalPlaces));
}

function subtract(a, b) {
    const decimalPlaces = Math.max((a.toString().split('.')[1] || '').length, (b.toString().split('.')[1] || '').length);
    const int1 = Math.round(a * Math.pow(10, decimalPlaces));
    const int2 = Math.round(b * Math.pow(10, decimalPlaces));
    const resultInt = int1 - int2;
    return (resultInt / Math.pow(10, decimalPlaces));
}

function multiply(a, b) {
    const decimalPlacesA = (a.toString().split('.')[1] || '').length;
    const decimalPlacesB = (b.toString().split('.')[1] || '').length;
    const decimalPlacesTotal = decimalPlacesA + decimalPlacesB;
    const int1 = Math.round(a * Math.pow(10, decimalPlacesA));
    const int2 = Math.round(b * Math.pow(10, decimalPlacesB));
    const resultInt = int1 * int2;
    return (resultInt / Math.pow(10, decimalPlacesTotal));
}

function divide(a, b) {
    const decimalPlacesA = (a.toString().split('.')[1] || '').length;
    const decimalPlacesB = (b.toString().split('.')[1] || '').length;
    const decimalPlacesMax = Math.max(decimalPlacesA, decimalPlacesB);
    const int1 = Math.round(a * Math.pow(10, decimalPlacesMax));
    const int2 = Math.round(b * Math.pow(10, decimalPlacesMax));
    const resultInt = int1 / int2;
    return resultInt;
}

function squareRoot(a){
    return Math.sqrt(a); 
}

function fitToDisplay(displayedValue) {
    let stringToBeDisplayed = displayedValue.toString();
    let length = stringToBeDisplayed.length;
    let defaultFontSize;
    if (length <= 10) {
      defaultFontSize = "42px";
      console.log("font is 42px");
    } else if (length > 10 && length < 30) {
      defaultFontSize = (40 - (2 * (length - 10))) + "px";
      console.log("font is calculated");
    }
    //JavaScript rounds floating-point numbers to a maximum of 15 significant digits 
    //so there is no need to trim the displayed result
    //the highest risk was the result of sqrt or division, so that is covered
    //other edge cases when the user types in very large numbers are intentionally left out
    document.getElementById('display').style.fontSize = defaultFontSize;
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
            clickedNumber = number.innerText;
            //only allows decimal point to be included once per number
            //not covered when decimal point is in the result from the calculation
            if (clickedNumber === '.') {
                if (decimal == false) {
                    a=a+clickedNumber;
                    decimal = true;
                }
            } else {
                a=a+clickedNumber;
            }
            // a=a+clickedNumber;
            fitToDisplay(a);
            document.getElementById('display').innerText=a;
            console.log("You clicked on "+clickedNumber);
            console.log("a is now "+a);
            console.log("result is now "+ result);
            // console.log(typeof(a));
            return a;
        })
    });  

document.querySelector('#clear').addEventListener('click', () => {
    document.getElementById('display').innerText=0;
    a="";
    result=0;
    inputs=[];
    decimal = false;
    //console.clear();
    fitToDisplay(result);
    console.log("You cleared the memory.");
})

const sum = document.querySelector('#plus');
    sum.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('plus').innerText);        
        inputs.push(a);
        if (isNaN(Number(inputs[inputs.length-1]))) {
            //It starts at -2 because I always add the empty string from <a> when clicking an operator
            inputs.splice(-2,2,"+");
        } else {
            inputs.push("+");
        }
        a="";
        decimal = false;
        console.log("a is now "+a);
        console.log("inputs is now "+ inputs);

    })

const diff = document.querySelector('#minus');
    diff.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('minus').innerText);        
        inputs.push(a);
        if (isNaN(Number(inputs[inputs.length-1]))) {
            inputs.splice(-2,2,"-");
        } else {
            inputs.push("-");
        }
        a="";
        decimal = false;
        console.log("a is now "+a);
        console.log("inputs is now "+ inputs);
    })

const product = document.querySelector('#multiply');
    product.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('multiply').innerText);        
        inputs.push(a);
        if (isNaN(Number(inputs[inputs.length-1]))) {
            inputs.splice(-2,2,"*");
        } else {
            inputs.push("*");
        }       
        a="";
        decimal = false;
        console.log("a is now "+a);
        console.log("inputs is now "+ inputs);
    })

const division = document.querySelector('#divide');
    division.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('divide').innerText);        
        inputs.push(a);
        if (isNaN(Number(inputs[inputs.length-1]))) {
            inputs.splice(-2,2,"/");
        } else {
            inputs.push("/");
        }
        a="";
        decimal = false;
        console.log("a is now "+a);
        console.log("inputs is now "+ inputs);
    })

const sqrt = document.querySelector('#sqrt');
    sqrt.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('sqrt').innerText);
        result = squareRoot(a);
        console.log(result);
        a=result;
        // setFontSize(result);
        fitToDisplay(result);
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
        console.log("You clicked =. inputs is now "+inputs);
        console.log("a is now "+a);
        inputs.push(a);
        console.log("inputs is now "+ inputs);
        //goes into infinite loop if you click an operator then equal
        while (isNaN(Number(inputs[inputs.length-1]))) {
            inputs.pop();
            console.log("inputs is now "+ inputs);
        }
        for (i=0; i<=inputs.length; i++){
                if (inputs[1]=="+"){
                    result=add(Number(inputs[0]), Number(inputs[2]));
                    inputs.splice(0, 3, result);
                } else if (inputs[1]=="-"){
                    result=subtract(Number(inputs[0]), Number(inputs[2]));
                    inputs.splice(0, 3, result);
                } else if (inputs[1]=="/"){
                    result=divide(Number(inputs[0]), Number(inputs[2]));
                    inputs.splice(0, 3, result);
                } else if (inputs[1]=="*"){
                    result=multiply(Number(inputs[0]), Number(inputs[2]));
                    inputs.splice(0, 3, result);
                } else if (inputs[1]==undefined){
                    result = inputs[0];
                }
        }
        console.log("The operations have been done, inputs is now finally "+ inputs);
        //The next two rows below enable the user to continue to perform calculations on the result
        a=result;
        inputs=[];
        decimal = false;
        console.log("a is now "+a);
        console.log(result);
        fitToDisplay(result);
        document.getElementById('display').innerText=result;
    });