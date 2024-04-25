const screen = document.querySelector("#calcScreen");
const numberBtn = document.querySelectorAll(".numberBtn");
const p = document.querySelector("p");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equal");
const decimal = document.querySelector(".decimal");
const backBtn = document.querySelector(".back");

let num1 = 0;
let num2 = 0;
let operator = "";
let displayNum1 = "";
let displayNum2 = "";
let total = "";

numberBtn.forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
        if (total !=="" && p.innerText == total){
            p.innerText = "";
        }
        p.innerText=p.innerText+numberBtn.id;

        if(p.innerText.includes(".") === true){
            decimal.setAttribute("disabled", true);
        } else {
            decimal.removeAttribute("disabled");
        }
    });
});


backBtn.addEventListener("click", () => {
    let str = p.innerText;
    str = str.slice(0, -1); 
    p.innerText = str;
});



equalBtn.addEventListener("click", ()=>{
    operate(operator, displayNum1, p.innerText);
});

function clearScreen(){
    p.innerText = "";
    displayNum1 = "";
    displayNum2 = "";
    operator = "";
    total = "";
}

function getOperator(opInput){


    if(operator !== "" && displayNum1 !==""){
        displayNum2 = p.innerText;

        if(total == p.innerText){
            displayNum1 = p.innerText;
            operator = opInput;
            return operator;
        };

        operate(operator, displayNum1, displayNum2);
        p.innerText = total;
    };

    displayNum1 = p.innerText;
    operator = opInput;
    p.innerText = total;
    
    return operator;
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
        if(num2 === 0 || num2 === NaN){
            p.innerText = "Don't end the universe please...";
            displayNum1 = "";
            displayNum2 = "";
            num1 = "";
            num2= "";
            operator = "";
            total = "";
        } else {
            total = divide(num1, num2);
            p.innerText = total;
        }
    } else {
        total = "Error: Invalid Operator";
        displayNum1 = "";
        displayNum2 = "";
        num1 = "";
        num2= "";
        operator = "";
        total = "";

    }

    console.log(num1, operator, num2, " = ", total);
    return total;
};
