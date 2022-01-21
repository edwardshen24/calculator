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

          if (e.target.matches("button")){ 
            if (!action){
                if (displayedNum === "0" || previousKeyType === "operator"||displayedNum === "Divide by 0 error") //remove  
                    display.textContent = keyContent;
                else 
                    display.textContent = displayedNum+keyContent;
                container.dataset.previousKeyType = keyContent;
            }
            else if (operators.indexOf(action) > -1){
                container.dataset.previousKeyType = 'operator';
                container.dataset.firstValue = displayedNum;
                container.dataset.operator = action;
            }
            else if (action === "decimal" && !displayedNum.includes('.'))
                display.textContent = displayedNum + ".";
            else if (action === "delete")
                display.textContent = display.textContent.slice(0,-1);
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
    let x = (parseFloat(a) + parseFloat(b));
    if (Number.isInteger(x))
        return x
    else 
        return x.toFixed(2);
}

function subtract(a,b){
    let x = (parseFloat(a) - parseFloat(b));
    if (Number.isInteger(x))
        return x
    else 
        return x.toFixed(2);
}

function multiply(a,b){
    let x = (parseFloat(a) * parseFloat(b));
    if (Number.isInteger(x))
        return x
    else 
        return x.toFixed(2);
}

function divide(a,b){
    let x = (parseFloat(a) / parseFloat(b));
    if (Number.isInteger(x))
        return x
    else 
        return x.toFixed(2);
}

function remainder(a,b){
    let x = (parseFloat(a) % parseFloat(b));
    if (Number.isInteger(x))
        return x
    else 
        return x.toFixed(2);
}

function operate(a,operator,b){
    let result = " ";
    if (operator === "add")
        result = add(a,b);
    else if(operator === "subtract")
        result = subtract(a,b);
    else if (operator === "multiply")
        result = multiply(a,b);
    else if (operator === "divide"){
        if (b == 0)
            result = "Divide by 0 error";
        else
            result = divide(a,b);
    }
    else if (operator === "remainder")
        result = remainder(a,b);

    return result;
}





