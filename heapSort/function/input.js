var valueInputSort = []
const pointTrees = [];
const widthScreen = 1270;
const widthTree = 50;
var topTree = 100;
var arrowTree = []
var statusTrees = []
var showTree = []
var lengthTree=0
var i_Loop = 0;
var run
var c = document.getElementById("root");
var ctx = c.getContext("2d");
var inputValue = document.getElementById('inputValue');
const valueTextComment = document.getElementById("TextComment")
var TextComment = ""
var commentShow = []

function getValueFromInput() {
    valueTextComment.innerHTML = "Nhận Giá trị từ input";
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
    lengthTree = valueInputSort.length
    showNode(valueInputSort,statusTrees,valueInputSort.length)
}

function ramdomValue(){   
    valueTextComment.innerHTML = "Nhận Giá trị ngẫu nhiên từ input";
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
    lengthTree = valueInputSort.length
    showNode(valueInputSort,statusTrees,valueInputSort.length)
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



