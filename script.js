// var textInput = document.querySelector("#translate").nodeValue;
// console.log(textInput);

let btn = document.querySelector("#btn");
let textInput = document.querySelector(".text-input");
let textOutput = document.querySelector("#output-div");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I m Ayush Sanj";

// var serverURL = "https://api.funtranslations.com/translate/groot.json";

function getTranslateURL(input) {
    return serverURL + "?" + "text" + input;
}

function clickHandle() {
    let inputText = textInput.value;
    //fetching server
    fetch(getTranslateURL(inputText))
        .then(response => response.json())
        .then(json => textOutput.innerText = json.contents.translated)
        .catch((error) => console.log("error: " + error));
};

btn.addEventListener("click", clickHandle);