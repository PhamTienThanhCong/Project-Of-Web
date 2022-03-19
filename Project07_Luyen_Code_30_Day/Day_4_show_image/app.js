const imageClicks = document.getElementsByClassName('image')
const imageShow = document.getElementsByClassName('image-show')[0]
const imageHide = document.getElementsByClassName('bx-x')[0]
const leftIcon = document.getElementsByClassName('bxs-chevron-left')[0]
const rightIcon = document.getElementsByClassName('bxs-chevron-right')[0]


var indexShow = 0;

function hinderItem(){
    console.log(indexShow)
    if (indexShow === 0){
        leftIcon.classList.add('hiddenIcon')
        console.log("stop")
    }else{
        leftIcon.className = 'bx bxs-chevron-left'
    }
    if (indexShow === imageClicks.length-1){
        rightIcon.classList.add('hiddenIcon')
    }else{
        rightIcon.className = 'bx bxs-chevron-right'
    }
}

for (let i = 0; i < imageClicks.length; i++) {
    imageClicks[i].addEventListener('click', () => {
        indexShow = i
        hinderItem()
        imageShow.classList.add('hidden')
        imageShow.getElementsByTagName('img')[0].src = imageClicks[indexShow].getElementsByTagName('img')[0].src
    })
}

leftIcon.addEventListener('click', ()=>{
    indexShow -= 1;
    hinderItem()
    imageShow.getElementsByTagName('img')[0].src = imageClicks[indexShow].getElementsByTagName('img')[0].src
})

rightIcon.addEventListener('click', ()=>{
    indexShow += 1;
    hinderItem()
    imageShow.getElementsByTagName('img')[0].src = imageClicks[indexShow].getElementsByTagName('img')[0].src
})

imageHide.onclick = function(){
    imageShow.classList.remove('hidden')
}



