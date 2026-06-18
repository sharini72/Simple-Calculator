const display = document.getElementById("display");
const history = document.getElementById("history");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value =
    display.value.slice(0,-1);
}

function calculate(){

    try{

        let expression = display.value;
        let result = eval(expression);

        history.innerHTML +=
        `<li>${expression} = ${result}</li>`;

        display.value = result;

    }
    catch{
        display.value = "Error";
    }
}

document.addEventListener("keydown",function(e){

    if(
        "0123456789+-*/.%"
        .includes(e.key)
    ){
        display.value += e.key;
    }

    if(e.key==="Enter"){
        calculate();
    }

    if(e.key==="Backspace"){
        deleteLast();
    }

    if(e.key==="Escape"){
        clearDisplay();
    }
});