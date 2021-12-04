// const arrow = arrowLine({source: '#test1', destination: '#test2', thickness: 3, color: 'red', endpoint:{size: 0.5}});
// const arrow = arrowLine({x: 20+35, y: 250+15}, {x: 400, y: 400+15},{thickness: 3, color: 'red', endpoint:{size: 0.5}});

// var node = document.getElementById('test1')
const widthScreen = 1000;
var nodes = [];


var pointX = [];
var firstPoint = widthScreen / (10 + 1) - 25
pointX.push(firstPoint)

for (var j = 1; j < 10; j++) {
    firstPoint = firstPoint + widthScreen / (10 + 1)
    pointX.push(firstPoint);
}

var sizePoint = pointX[1] - pointX[0]

var nodeValue = ['null']
var nodePoint = [0];
var nodeId = ['node-NULL'];


function insertNode(index, value) {
    ll.insertAt(index, value);
    for (var i = 0; i < nodeValue.length; i++) {
        if (nodePoint[i] > index - 1) {
            nodePoint[i] += 1
        }
    }
    nodeValue.push(value)
    nodePoint.push(index)
    nodeId.push("nodeIdRand" + index + "" + Math.floor(Math.random() * 10) + "")
}

insertNodeShow(0, 1)



function deleteNode(index) {
    ll.removeFrom(index);


    var show = []
    var number = []
    for (var i = 0; i < nodeValue.length; i++) {
        if (nodePoint[i] <= index) {
            console.log("show")
            show.push(nodeId[i])
            number.push(nodePoint[i])
        }
    }
    NodeSort(show, number)
    console.log(show, number)

    var i = 0;
    var a
    const run = setInterval(function () {
        if (i < show.length) {
            document.getElementById(show[i]).style.border = "2px solid red"
        } else if(i === show.length){
            for (var j = 0; j < nodeValue.length; j++) {
                if (nodePoint[j] > index) {
                    nodePoint[j] -= 1
                }
            }
            document.getElementById(show[i-1]).style.backgroundColor = "red"
            document.getElementById(show[i-1]).id = "move-node"
        }
        if(i > show.length){
            var t = 0;
            const run2 = setInterval(function(){
                if (t === 0){
                    document.getElementById("move-node").style.top = "280px"
                }else if(t === 1){
                    document.getElementById("move-node").style.left = "60px"; 
                }else if (t === 2){
                    nodeValue.splice(index, 1);
                    nodePoint.splice(index, 1);
                    nodeId.splice(index, 1);
                    clearInterval(run2);
                    resetNode()
                    console.log("stop Insert")
                }
                t++;
            },1000)
            clearInterval(run);
        }
        i++;
    }, 1000)



}

function showNode() {
    var node = document.createElement("div");
    node.id = nodeId[0]
    node.innerHTML = nodeValue[0]
    node.style.left = pointX[nodePoint[0]] + "px"
    node.className = "chill-show"
    document.getElementById("main-show-to-desk").appendChild(node)
}
showNode()

function resetNode() {
    for (var j = 0; j < nodeId.length; j++) {
        document.getElementById(nodeId[j]).style.border = "none"
        document.getElementById(nodeId[j]).style.left = pointX[nodePoint[j]]+"px"
    }
}