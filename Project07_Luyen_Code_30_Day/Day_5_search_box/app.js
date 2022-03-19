const btnSearch = document.getElementsByClassName('search-btn')[0];

btnSearch.addEventListener('click',function(){
    this.parentElement.classList.toggle('show-search')
    this.previousElementSibling.focus()
})