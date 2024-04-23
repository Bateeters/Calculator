const screen = document.querySelector("#calcScreen");
const btn = document.querySelectorAll("button");
const p = document.querySelector("p");
const clearBtn = document.querySelector("#clear");

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    p.innerText=p.innerText+btn.id;
  });
});

function clearScreen(){
    p.innerText = "";
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

function save(){
    let number = p.innerHTML;
    p.innerHTML = "";
    return number;
}
