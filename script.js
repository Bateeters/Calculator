const screen = document.querySelector("#calcScreen");
const numberBtn = document.querySelectorAll(".numberBtn");
const p = document.querySelector("p");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equal");

let num1 = 0;
let num2 = 0;
let operator = "";
let displayNum1 = "";
let displayNum2 = "";

numberBtn.forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
        p.innerText=p.innerText+numberBtn.id;
        });
  });

equalBtn.addEventListener("click", ()=>{
    secondNum();
    operate(operator, displayNum1, displayNum2);
});

function clearScreen(){
    p.innerText = "";
}

function getOperator(opInput){
    displayNum1 = p.innerText;
    operator = opInput;

    p.innerText = "";

    console.log(displayNum1, operator);
    return displayNum1, operator;
}

function secondNum(){
    displayNum2 = p.innerText;
    console.log(displayNum2);
    return displayNum2;
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    let total = 0;
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator === "+"){
        total = add(num1, num2);
        p.innerText = total;
    } else if(operator === "-"){
        total = subtract(num1, num2);
        p.innerText = total;
    } else if(operator ==="*"){
        total = multiply(num1, num2);
        p.innerText = total;
    } else if(operator==="/"){
        total = divide(num1, num2);
        p.innerText = total;
    } else {
        total = "Error: Invalid Operator";
    }
    return total;
};
