const display = document.querySelector(".display");
const keys = document.getElementById("keys");
const container = document.getElementById("container"); //calculator keys

clicker();

function clicker(){
    keys.addEventListener('click', e => {
        let operators = ["add","subtract","multiply","divide","remainder"];
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent //what will be displayed
        const displayedNum = display.textContent //what is on the display
        const previousKeyType = container.dataset.previousKeyType

        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'));

          if (e.target.matches("button")){ 
            if (!action){
                if (displayedNum === "0" || previousKeyType === "operator") //remove 0 
                    display.textContent = keyContent;
                else    
                    display.textContent = displayedNum+keyContent;
                container.dataset.previousKeyType = keyContent;
            }
            else if (operators.indexOf(action) > -1){
                key.classList.add('is-depressed')
                container.dataset.previousKeyType = 'operator'
                container.dataset.firstValue = displayedNum
                container.dataset.operator = action
            }
            else if (action === "decimal" && !displayedNum.includes('.'))
                display.textContent = displayedNum + ".";
            else if (action === "delete")
                console.log("delete")
            else if (action === "clear")
                display.textContent = " ";
            else if (action === "operate"){
                const secondNum = displayedNum;
                const firstNum = container.dataset.firstValue;
                const operator = container.dataset.operator;    
                display.textContent = operate(firstNum, operator, secondNum);
            }
          }
    });
}



function add(a,b){
     return parseFloat(a)+ parseFloat(b);
}

function subtract(a,b){
    return parseFloat(a) - parseFloat(b);
}

function multiply(a,b){
    return parseFloat(a) * parseFloat(b);
}

function divide(a,b){
    return (parseFloat(a) / parseFloat(b)).toFixed(2);
}

function remainder(a,b){
    return (parseFloat(a) % parseFloat(b)).toFixed(2);
}

function operate(a,operator,b){
    let result = " ";
    if (operator == "add")
        result = add(a,b);
    else if(operator == "subtract")
        result = subtract(a,b);
    else if (operator == "multiply")
        result = multiply(a,b);
    else if (operator == "divide")
        result = divide(a,b);
    else if (operator == "remainder")
        result = remainder(a,b);

    return result;
}





