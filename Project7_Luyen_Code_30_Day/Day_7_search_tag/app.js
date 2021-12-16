const content = document.getElementsByClassName('conten-search')[0];
const searchContent = document.getElementById('search-input');

var historySearch = ['NodeJs','reactJs'];

function deleteSearch(index){
    historySearch.splice(index,1);
    reRender()
}

function reRender(){
    content.innerHTML = '';
    for (let i = 0; i < historySearch.length; i++){
        content.innerHTML += `
            <li>
                ${historySearch[i]}
                <i class='bx bx-x' onclick="deleteSearch(${i})"></i>
            </li>
        `
    }
    content.appendChild(searchContent);
}
reRender()

searchContent.addEventListener('keydown',function(event){
    if( event.key == 'Enter' ){
        historySearch.push(searchContent.value.trim());
        searchContent.value = "";
        reRender()
    }
    searchContent.focus()
})

function removeAll(){
    historySearch=[];
    reRender();
}

function search(){
    alert('Tìm kiếm '+ [...historySearch]+" Thất bại")
}