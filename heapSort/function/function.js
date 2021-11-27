const pointTrees = [];
const widthScreen = 1000;
const widthTree = 50;
var topTree = 50;
var arrowTree = []

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

function hidden() {
    for (var i = 1; i < pointTrees.length; i++) {
        var arrow = document.getElementById(pointTrees[i].idArrowTree)
        arrowTree.push(arrow)
        destroyTree(pointTrees[i].idArrowTree)
    }
}
hidden()

function CreateTree(number) {
    for (var i = 0; i < number - 1; i++) {
        var param = document.createElement("div");
        param.innerText = valueInputSort[i];
        param.className = "TreeStyle";
        param.style.left = pointTrees[i].left;
        param.style.top = pointTrees[i].top;
        param.id = pointTrees[i].idTree;
        document.body.appendChild(param);
    }
    for (var i = 0; i < number - 2; i++) {
        document.body.appendChild(arrowTree[i]);
    }
}

function destroyTree(idArrowTree) {
    var myobj = document.getElementById(idArrowTree);
    myobj.remove();
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

    ojbX.style.backgroundColor = 'yellow';
    ojbY.style.backgroundColor = 'yellow';

    var temp = ojbX.innerText
    ojbX.innerText = ojbY.innerText
    ojbY.innerText = temp
}

function removeNode(index) {
    if(index > 0){
        destroyTree(pointTrees[index].idArrowTree);
    }
    destroyTree(pointTrees[index].idTree); 
}
