var btn = document.querySelector("#btn");
var textInput = document.querySelector(".text-input");
var textOutput = document.querySelector("#output-div");

var serverURL = "https://api.funtranslations.com/translate/groot.json?text=textInput";

function getTranslateURL(input) {
    return serverURL + "?" + "text" + input;
}

function clickHandle() {
    var inputText = textInput.value;

    //fetching server
    fetch(getTranslateURL(inputText))
        .then(response => response.json())
        .then(json => textOutput.innerText = json.contents.translated)
        .catch((error) => console.log("error: " + error));
};

btn.addEventListener("click", clickHandle);