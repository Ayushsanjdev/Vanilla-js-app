// var textInput = document.querySelector("#translate").nodeValue;
// console.log(textInput);

let btn = document.querySelector("#btn");
let textInput = document.querySelector(".text-input");
let textOutput = document.querySelector("#output-div");

// var serverURL = "https://lesonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I m Ayush Sanj";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslateURL(text) {
    return serverURL + "?" + "text" + text;
}

function clickHandle() {
    let inputText = textInput.value;
    
    fetch(getTranslateURL(inputText))
    .then(response => response.json())
    .then(json => {let translatedText = json.contents.translated;
    textOutput.innerText = translatedText})
    .catch((error) => console.log("error: " + error)); 
    alert("some error occured try again later somtime");

    
};

btn.addEventListener("click", clickHandle);

