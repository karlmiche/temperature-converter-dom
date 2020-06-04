console.log('Hello, front end');

//cache the DOM
var form = document.querySelector("form");
var div = document.getElementById("temp-display");
var entry = document.getElementById("temp-entry");
const f = document.getElementById("f");
const c = document.getElementById("c");
const subby = document.getElementById("submit");

//a function to convert the temp from f to c or reverse
var convertF = function(num) {
    return ((num - 32) * (5/9));
}

var convertC = function(num) {
    return ((num * (9/5)) + 32);
}

let value = 0 

function getValue() {
    console.log(entry);
    return parseInt(entry.value);
}

subby.onclick = function inputTemp (event){
event.preventDefault();
//when a user enters a number in form and clicks submit, 
//that value is kept and named. 
    console.log(value);
//if a user checks the radio button c,
    if (f.checked === true) {
//we ask the value be returned in f
        value = convertF(getValue());
        console.log(value);
        div.innerHTML = value;
        return value;
}



//if a user checks the radio button f,
    if (c.checked === true) { 
//we ask the value be returned in c
        value = convertC(getValue());
        console.log(value);
        div.innerHTML = value;
        return value;
//c value is displayed in my div
    }
}


