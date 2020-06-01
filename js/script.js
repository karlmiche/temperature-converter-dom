console.log('Hello, front end');

//cache the DOM
var form = document.querySelector("form");
var div = document.querySelector("temp-display");
var entry = document.querySelector("temp-entry");

//a function to convert the temp from f to c or otherwise

var convertF = function(num) {
    return ((num - 32) * (5/9));
}

var convertC = function(num) {
    return ((num * (9/5)) + 32);
}

let input = 0

var userChoseF = document.getElementById("f").checked
var userChoseC = document.getElementById("c").checked

var input = function updateDisplay(userChoseC, userChoseF){
    document.getElementById.entry.value
    document.getElementById.div.innerText=result.value}

var result = function userInput() {document.getElementById.form.addEventListener("submit", (e) =>{
    e.preventDefault() 
    temperature = document.getElementById.entry.value;

//conditionals to check which radio button the user has selected and which formula to use
if (userChoseF === true){
    convertF(input);
      updateDisplay();
      return;
  }else {
      convertC(input);
      updateDisplay();
      return;
  }
  })
}



/********* Anna's Class Notes how to solve
 * 
 * 
 *  * var form = document.querySelector("form");
   var div = document.querySelector("temp-display");

 * //function to run when the form is submitted
 * form.addEventListener("submit", function(e){
 * e.preventDefault();
 * 
 * var tempToConvert = form.elements["input"].value;
 * 
 * //check for celcius or fahrenheit
 * 
 *
 * }
 * 
 * ***********/
