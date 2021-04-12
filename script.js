var textInput = document.querySelector(".text-input").nodeValue;
console.log(textInput);

var btn = document.querySelector("#btn").addEventListener("click", function mouseClick() {
    console.log("clicked!!", textInput);
});