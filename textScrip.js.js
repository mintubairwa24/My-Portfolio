const usertext = document.getElementById('inputtext');
const speechbtn = document.getElementById('speech');
 
speechbtn.addEventListener('click', function(){
    speechText = usertext.value;
    let speechData = new SpeechSynthesisUtterance();
    speechData.text = speechText;
    speechSynthesis.speak(speechData)
})