const openModalBtn = document.getElementsByClassName('open-modal-btn')[0];
const modal = document.getElementsByClassName('modal')[0];
const closeModalIcon = document.getElementsByClassName('bx-x')[0];
const closeModalBtn = document.getElementsByClassName('close-modal-btn')[0];


function closeModal(){
    modal.classList.toggle('hidden')
}

openModalBtn.onclick = closeModal

closeModalIcon.addEventListener('click', closeModal)

closeModalBtn.addEventListener('click', closeModal)

modal.addEventListener('click',function(e){
    if(e.target === e.currentTarget){
        closeModal()
    }
})