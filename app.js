var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"\

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationURL(text){
     return serverURL + "? " + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong with server: Try again after sometime");
}

function clickHandler() {
    
    // outputDiv.innerText = "jsjsjsjs " + txtInput.value;
var inputText = txtInput.value; // taking input

   // calling server for processing
    fetch(getTranslationURL(inputText))
         .then( response => response.json())
         .then(json => { 
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
         })
         .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)




