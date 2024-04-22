

//Selecting DOM
const keys = document.querySelectorAll(".keyboard button")
let output = document.querySelector(".output");
let resultValue = document.querySelector(".result");
const clearButton = document.querySelector("#clean");

// Initializing varibles

let first = "",second = "",operator = "",clicked = false;


// event listenr for clear button

clearButton.addEventListener("click" , () =>{
    // resetting
    first = "",
    second = "",
    operator = "",
    clicked = false;
    output.textContent = "";
    resultValue.textContent = "";
})

keys.forEach((item) =>{
    item.addEventListener("click" , () =>{
        if(/[0-9]/.test(item.textContent)) // if number is zero to nine
        {
            if(!clicked) {
                first+=item.textContent;
                output.textContent = first;
            }
            else{
                second+=item.textContent;
                output.textContent = second;
            }
        }
        else{
            switch(item.textContent) {
                // we'll use switch instead of if and else if 
                case "+":
                case "-":
                case "×":
                case "×":
                case "%":
                case "sin":
                case "cos":
                case "tg":
                    
                clicked = true;
                operator = item.textContent;
                hideResult();
                break;
               case "=":
                if(first !== "" && second !== "") {
                    const result = perfomOperation(parseFloat(first),parseFloat(second),operator ) // function to calc
                    resultValue.textContent = result;
                    first = result.toString();
                    second = "";
                    clicked = false
                } 
            }
        }
    })
})
function hideResult(){
    document.querySelector(".result").textContent = "";
}

function perfomOperation(first,second,operator){
    switch(operator) {
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "×":
            return first * second;
        case "÷":
            return first / second;
        case "%":
            return first % second;
        case "sin":
            return Math.sin(first);
        case "cos":
            return Math.cos(first);
        case "tg":
            return Math.tan(first);
        default :
        return "error";                              
    }
}