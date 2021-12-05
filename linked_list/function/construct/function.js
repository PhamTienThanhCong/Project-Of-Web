const inputValue = document.getElementById("value-insert")
const inputIndexOfValue = document.getElementById("index-insert")
const inputIndexOfFind = document.getElementById("index-find-delete")

var indexRun = 0;
var valueInput = 0;
var doRun = false;

function insertNodeFunction(){
    if(inputIndexOfValue.value){
        indexRun = parseInt(inputIndexOfValue.value);
        inputIndexOfValue.value = "";
    }
    if(inputValue.value){
        valueInput = inputValue.value;
        inputValue.value = "";
        doRun = true;
    }
    if(indexRun <= ll.size_of_list()){
        if (doRun){
            insertNodeShow(indexRun,valueInput)
            doRun = false;
        }
    }
    else{
        hoverAll()
    }
}

function FindNodeFunction(type){
    if(inputIndexOfFind){
        indexRun = parseInt(inputIndexOfFind.value)
        inputIndexOfFind.value = "";
        doRun = true;
    }
    if(indexRun < ll.size_of_list()){
        if (doRun && type === 0){
            findNodeShow(indexRun)
            doRun = false;
        }
        if (doRun && type === 1){
            deleteNodeShow(indexRun)
            doRun = false;
        }
    } 
    else{
        hoverAll()
    }
}

