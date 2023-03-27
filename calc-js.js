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
let clickedNumber = 0;
let result=0;
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
            setFontSizeOfDisplayElement(a);
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
    //console.clear();
    console.log("You cleared the memory.");
})

const sum = document.querySelector('#plus');
    sum.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('plus').innerText);        
        inputs.push(a);
        if (isNaN(parseFloat(inputs[inputs.length-1]))) {
            //It starts at -2 because I always add the empty string from a when clicking an operator
            inputs.splice(-2,2,"+");
        } else {
            inputs.push("+");
        }
        a="";
        console.log("a is now "+a);
        console.log("inputs is now "+ inputs);

    })

const diff = document.querySelector('#minus');
    diff.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('plus').innerText);        
        inputs.push(a);
        if (isNaN(parseFloat(inputs[inputs.length-1]))) {
            inputs.splice(-2,2,"-");
        } else {
            inputs.push("-");
        }
        a="";
        console.log("a is now "+a);
        console.log("inputs is now "+ inputs);
    })

const product = document.querySelector('#multiply');
    product.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('plus').innerText);        
        inputs.push(a);
        if (isNaN(parseFloat(inputs[inputs.length-1]))) {
            inputs.splice(-2,2,"*");
        } else {
            inputs.push("*");
        }       
        a="";
        console.log("a is now "+a);
        console.log("inputs is now "+ inputs);
    })

const division = document.querySelector('#divide');
    division.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('plus').innerText);        
        inputs.push(a);
        if (isNaN(parseFloat(inputs[inputs.length-1]))) {
            inputs.splice(-2,2,"/");
        } else {
            inputs.push("/");
        }
        a="";
        console.log("a is now "+a);
        console.log("inputs is now "+ inputs);
    })

const sqrt = document.querySelector('#sqrt');
    sqrt.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('sqrt').innerText);
        result = squareRoot(a);
        console.log(result);
        a=result;
        //display number
        document.getElementById('display').innerText=result;
    })

const posNeg = document.querySelector('#pos-neg');
    posNeg.addEventListener('click', () => {
        console.log("You clicked on "+document.getElementById('pos-neg').innerText);
        if (a > 0) {
            a="-"+a;
            //display number
            document.getElementById('display').innerText=a;
            console.log("a is now"+a);
        } else if (a < 0) {
            a=a.slice(1);
            //display number
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
        while (isNaN(parseFloat(inputs[inputs.length-1]))) {
            inputs.pop();
            console.log("inputs is now "+ inputs);
        }
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
                } else if (inputs[1]==undefined){
                    result = inputs[0];
                }
        }
        console.log("The operations have been done, inputs is now finally "+ inputs);
        //This below is so that the user can continue to perform calculations on the result
        a=result;
        inputs=[];
        console.log("a is now "+a);
        console.log(result);
        //display number
        setFontSizeOfDisplayElement(result);
        document.getElementById('display').innerText=result;

    });

    
    
    
    
    
    function setFontSizeOfDisplayElement(numberToBeDisplayed){
        let standardFontSize = "42px";
        console.log("font set to 42");
        let stringToBeDisplayed = numberToBeDisplayed.toString();
        if(stringToBeDisplayed.length>3){
            standardFontSize = "24px";
            console.log("font set to 24");
        }
            
        document.getElementById('display').style.fontSize = standardFontSize;
        
        
        
    }