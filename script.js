// var textInput = document.querySelector("#translate").nodeValue;
// console.log(textInput);

var btn = document.querySelector("#btn");
var textInput = document.querySelector(".text-input");
var textOutput = document.querySelector("#output-div");


function clickHandle() {
    textOutput.innerText = "lang " + textInput.value;
    parent.appendChild(textOutput);
}

btn.addEventListener("click", clickHandle);

