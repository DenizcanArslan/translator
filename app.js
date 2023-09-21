//elements
const fromLang=document.querySelector("#from-lang");
const toLang=document.querySelector("#to-lang");
const btnTranslate=document.querySelector('#btnTranslate');
const fromText=document.querySelector('#from-text');
const toText=document.querySelector('#to-text');
const exchangeButton=document.querySelector(".exchange");

for(let lang in languages){
    const option= `<option value="${lang}">${languages[lang]}</option>`;
   
    fromLang.insertAdjacentHTML('beforeend',option);
    toLang.insertAdjacentHTML('beforeend',option);


    fromLang.value="tr-TR";//as default
    toLang.value='en-GB';//as default
    
 

}


btnTranslate.addEventListener('click',()=>{
    let text=fromText.value;
    let from=fromLang.value;
    let to=toLang.value;


    const url=`https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`;

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        toText.value=data.responseData.translatedText;
    });

});


exchangeButton.addEventListener("click", ()=>{
   let memory=fromText.value;//
   fromText.value=toText.value;
   toText.value=memory;
    console.log(exchangeButton);

    let memory_button=fromLang.value;
    fromLang.value=toLang.value;
    toLang.value=memory_button;
   
});


const fromTextCopyButton=document.querySelector(".left .fa-copy");
const toTextCopyButton=document.querySelector(".right .fa-copy");

fromTextCopyButton.addEventListener("click",()=>{
navigator.clipboard.writeText(fromText.value);
});

toTextCopyButton.addEventListener("click",()=>{
    navigator.clipboard.writeText(toText.value);
    
    });

const fromTextVolumeUpButton=document.querySelector(".left .fa-volume-up");
const toTextVolumeUpButton=document.querySelector(".right .fa-volume-up");

fromTextVolumeUpButton.addEventListener("click",()=>{
    
    let utterance;
    utterance=new SpeechSynthesisUtterance(fromText.value)
    utterance.lang=fromLang.value;
    speechSynthesis.speak(utterance);

});

toTextVolumeUpButton.addEventListener("click",()=>{
    let utterance;
    utterance=new SpeechSynthesisUtterance(toText.value)
    utterance.lang=toLang.value;
    console.log(toText.value);
    speechSynthesis.speak(utterance);

});
