var valueInputSort = []
const pointTrees = [];
const widthScreen = 1000;
const widthTree = 50;
var topTree = 50;
var arrowTree = []
var statusTrees = []
var showTree = []

function getValueFromInput() {
    var inputValue = document.getElementById('inputValue');
    const valueInput = inputValue.value;
    var statusTree = [];
    var a = [];
    valueInputSort = valueInput.split(',');
    for (var i = 0; i < valueInputSort.length; i++) {
        a[i] = parseInt(valueInputSort[i]);
        statusTree.push('0');
    }
    valueInputSort = a;
    statusTrees = statusTree;
    showNode(valueInputSort)
}

function ramdomValue(){
    var inputValue = document.getElementById('inputValue')
    var a = [];
    var statusTree = []
    var teamp = 0;
    for (var i = 0; i < 31; i++){
        teamp = Math.floor(Math.random() * 100)
        while(a.includes(teamp)){
            teamp = Math.floor(Math.random() * 100)
        }
        a.push(teamp)
        statusTree.push('0')
    }
    statusTrees = statusTree
    valueInputSort = a;
    inputValue.value = a;
    showNode(valueInputSort)
}

for (var i = 1; i <= 16; i = i * 2) {
    var valuePoint = widthScreen / (i * 2) - widthTree / 2;
    for (var j = 1; j <= i; j++) {
        var fromConect = 0
        if (pointTrees.length > 0){
            fromConect = Math.round(pointTrees.length/2)-1
        }
        var pointTree = {
            top: topTree,
            left: valuePoint,
            conect: fromConect
        }
        pointTrees.push(pointTree);
        valuePoint = valuePoint + widthScreen / i;
    }
    topTree = topTree + 100
}



