const alertKey = document.getElementsByClassName('alert')[0]
const showKey = document.getElementsByClassName('key')
const modalKey = document.getElementsByClassName('show-key')[0]
const numberCode = document.getElementsByClassName('number-key')[0]

const listeneKey = document.body
var hinderItem = false

listeneKey.addEventListener('keydown',(event)=>{
    hinderItem = true;
    if (hinderItem){
        alertKey.classList.add('hidden')
        modalKey.classList.remove('hidden')
    }
    numberCode.innerHTML = event.keyCode;
    showKey[0].innerHTML = event.key;
    showKey[1].innerHTML = event.location;
    showKey[2].innerHTML = event.which;
    showKey[3].innerHTML = event.code;
})