var valueInputSort = []

function getValueFromInput() {
    var inputValue = document.getElementById('inputValue')
    const valueInput = inputValue.value
    valueInputSort = valueInput.split(',')
    for (var i = 0; i < valueInputSort.length; i++) {
        valueInputSort[i] = parseInt(valueInputSort[i])
    }
    CreateTree(valueInputSort.length)
}

function ramdomValue(){
    var inputValue = document.getElementById('inputValue')
    var a = [];
    var teamp = 0;
    for (var i = 0; i < 32; i++){
        teamp = Math.floor(Math.random() * 100)
        while(a.includes(teamp)){
            teamp = Math.floor(Math.random() * 100)
        }
        a.push(teamp)
    }
    inputValue.value = a;
    valueInputSort = a;
    CreateTree(valueInputSort.length)
}




