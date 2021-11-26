const pointTrees = [];
const widthScreen = 1000;
const widthTree = 50;
var topTree = 50;

for (var i = 1; i <= 16; i = i * 2) {
    var valuePoint = widthScreen / (i * 2) - widthTree / 2;
    for (var j = 1; j <= i; j++) {
        var pointTree = {
            top: topTree,
            left: valuePoint,
            idTree: "tree" + Math.round(valuePoint) + topTree,
            idArrowTree: "cong" + topTree + Math.round(valuePoint),
        }
        pointTrees.push(pointTree);
        valuePoint = valuePoint + widthScreen / i;
    }
    topTree = topTree + 100
}

function CreateTree(value) {
    for (var i = 0; i < value.length; i++) {
        var param = document.createElement("div");
        param.innerText = value[i];
        param.className = "TreeStyle";
        param.style.left = pointTrees[i].left;
        param.style.top = pointTrees[i].top;
        param.id = pointTrees[i].idTree;
        document.body.appendChild(param);
    }
}

function destroyTree(idArrowTree) {
    var myobj = document.getElementById(idArrowTree);
    myobj.remove();
}

function destroyArrowTrees(size) {
    for (var i = size; i < pointTrees.length; i++) {
        var obj = pointTrees[i].idArrowTree
        destroyTree(obj)
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function changeTwoValue(x, y) {
    var ojbX = document.getElementById(pointTrees[x].idTree)
    var ojbY = document.getElementById(pointTrees[y].idTree)
    var temp = ojbX.innerText
    ojbX.innerText = ojbY.innerText
    ojbY.innerText = temp
}

const array = [];
for (var i = 0; i < 31; i++) {
    array.push(Math.round(Math.random() * 100))
}

destroyArrowTrees(array.length);

CreateTree(array)