// const screen = document.querySelector("#calcScreen");
// const btn = document.querySelectorAll("button");
// const p = document.querySelector("p");
// const clearBtn = document.querySelector("#clear");

// btn.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       p.innerText=p.innerText+btn.id;
//     });
//   });

// function clearScreen(){
//     p.innerText = "";
// }

let num1 = 0;
let num2 = 0;
let operator = "+";


const add = function add(num1, num2){
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
    if (operator === "+"){
        total = add(num1, num2);
    } else if(operator === "-"){
        total = subtract(num1, num2);
    } else if(operator ==="*"){
        total = multiply(num1, num2);
    } else if(operator==="/"){
        total = divide(num1, num2);
    } else {
        total = "Error: Invalid Operator";
    }
    console.log(total);
};
