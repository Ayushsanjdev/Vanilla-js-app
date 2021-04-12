// var textInput = document.querySelector("#translate").nodeValue;
// console.log(textInput);

var btn = document.querySelector("#btn");
var textInput = document.querySelector(".text-input")

function clickHandle() {
    console.log("clicked!!");
    console.log("input: ", textInput.value);
}

btn.addEventListener("click", clickHandle);

