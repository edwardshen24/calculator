const display = document.querySelector(".display");
const keys = document.getElementById("keys");
const container = document.getElementById("container");


function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(){

}

keys.addEventListener('click', e => {
    if (`${e.target.id}` !== "keys")
        display.textContent = `${e.target.id}`;
});