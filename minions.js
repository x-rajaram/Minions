var serverURL="https://api.funtranslations.com/translate/minion.json";
var btnTranslate= document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-area-input");
var transDiv=document.querySelector("#output")
//var txtInput=document.querySelector('input[name="userlanguage"]');
//var txtInput=document.querySelector("textarea");

var txtInput=document.querySelector(".txtarea");

function getTranslationURI(text){
    return serverURL+"?text="+text
}
function errorHandler(){
    console.log("something went wrong;try after sometime")
}
function clickhandler() {
    // console.log("clicked");
    // // console.log("input",txtInput.value)
    // console.log("input",txtInput.value);
    // // alert("hi "+ txtInput.value)
    var userTxt=txtInput.value
    fetch(getTranslationURI(userTxt))
    .then(response=>response.json())
    .then(json=>{
        var translatedTxt=json.contents.translated;
        // transDiv.innerText=translatedTxt;
        console.log(json.contents.translated)
        transDiv.innerText=translatedTxt;
    }

        
        )
    .catch(errorHandler)

};
btnTranslate.addEventListener("click",clickhandler);
