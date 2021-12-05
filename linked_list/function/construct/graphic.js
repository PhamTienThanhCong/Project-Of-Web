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


function showNode() {
    var node = document.createElement("div");
    node.id = nodeId[0]
    node.innerHTML = nodeValue[0]
    node.style.left = pointX[nodePoint[0]] + "px"
    node.className = "chill-show"
    document.getElementById("main-show-to-desk").appendChild(node)
}
showNode()
insertNodeShow(0, 1)

function insertNode(index, value) {
    ll.insertAt(index, value);
    for (var i = 0; i < nodeValue.length; i++) {
        if (nodePoint[i] > index - 1) {
            nodePoint[i] += 1
        }
    }
    nodeValue.push(value)
    nodePoint.push(index)
    nodeId.push("nodeIdRand" + index + "" + Math.floor(Math.random() * 1000) + "")
}

function findNodeShow(index) {
    ll.removeFrom(index);
    if (document.getElementById("move-node")){
        document.getElementById("move-node").remove()
    }

    var show = []
    var number = []
    for (var i = 0; i < nodeValue.length; i++) {
        if (nodePoint[i] <= index) {
            show.push(nodeId[i])
            number.push(nodePoint[i])
        }
    }
    NodeSort(show, number)

    var i = 0;
    const run = setInterval(function () {
        if (i < show.length) {
            document.getElementById(show[i]).style.border = "2px solid #66ff33"
        } else if(i === show.length){
            var newnode = document.createElement("div");
            newnode.className = "chill-show"
            newnode.style.left = document.getElementById(show[i-1]).style.left
            newnode.style.top = document.getElementById(show[i-1]).style.top
            newnode.id = "move-node"
            newnode.style.backgroundColor = "#33cc33"
            newnode.innerText = document.getElementById(show[i-1]).innerText
            document.getElementById("main-show-to-desk").appendChild(newnode)
        }
        if(i > show.length){
            var t = 0;
            const run2 = setInterval(function(){
                if (t === 0){
                    document.getElementById("move-node").style.top = "280px"
                }else if(t === 1){
                    document.getElementById("move-node").style.left = "60px"; 
                }else if (t === 2){
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
function insertNodeShow(index, value) {
    insertNode(index,value)
    // NodeSort()

    var node = document.createElement("div");
    node.id = nodeId[nodeValue.length - 1]
    node.innerHTML = nodeValue[nodeValue.length - 1]

    node.style.left = pointX[0]+"px"
    node.style.top = "50px"
    node.className = "chill-show"
    document.getElementById("main-show-to-desk").appendChild(node)  

    var show = []
    var number = []
    for (var i = 0; i <nodeValue.length; i++){
        if (nodePoint[i] < index){
            show.push(nodeId[i])
            number.push(nodePoint[i])
        }
    }
    NodeSort(show,number)
    
    var i=0;
    const run = setInterval(function() {
        if (i<show.length){
            document.getElementById(show[i]).style.border = "2px solid red"
        }else if(i===show.length){
            for (var j = 0; j <nodeValue.length; j++){
                if (nodePoint[j] !== index){
                    document.getElementById(nodeId[j]).style.left = pointX[nodePoint[j]]+"px"
                }               
            }
            i = nodeValue.length;
        }
        i++;
        if(i > nodeValue.length){       
            var t = 0;
            if (index === 0){
                t=1;
            }
            const run2 = setInterval(function(){
                if (t === 0){
                    document.getElementById(nodeId[nodeValue.length - 1]).style.left = pointX[nodePoint[nodeValue.length - 1]]+"px"
                }else if(t === 1){
                    document.getElementById(nodeId[nodeValue.length - 1]).style.top = "150px"; 
                }else if (t === 2){
                    clearInterval(run2);
                    resetNode()
                    console.log("stop Insert")
                }
                t++;
            },1000)
            clearInterval(run);
        }
    },1000)
}
function deleteNodeShow(index) {
    ll.removeFrom(index);
    if (document.getElementById("move-node")){
        document.getElementById("move-node").remove()
    }

    var show = []
    var number = []
    for (var i = 0; i < nodeValue.length; i++) {
        if (nodePoint[i] <= index) {
            show.push(nodeId[i])
            number.push(nodePoint[i])
        }
    }
    NodeSort(show, number)
    var i = 0;
    const run = setInterval(function () {
        if (i < show.length) {
            document.getElementById(show[i]).style.border = "2px solid red"
        } else if(i === show.length){
            var pointDelete
            for (var j = 0; j < nodeValue.length; j++) {
                if (nodePoint[j] === index){
                    pointDelete = j
                }
            }
            for (var j = 0; j < nodeValue.length; j++) {
                if (nodePoint[j] > index) {
                    nodePoint[j] -= 1
                }
            }
            document.getElementById(show[i-1]).style.backgroundColor = "red"
            document.getElementById(show[i-1]).id = "move-node"
            nodeValue.splice(pointDelete, 1);
            nodePoint.splice(pointDelete, 1);
            nodeId.splice(pointDelete, 1);
        }
        if(i > show.length){
            var t = 0;
            const run2 = setInterval(function(){
                if (t === 0){
                    document.getElementById("move-node").style.top = "280px"
                }else if(t === 1){
                    document.getElementById("move-node").style.left = "60px"; 
                }else if (t === 2){
                    console.log("stop Delete")
                    clearInterval(run2);
                    resetNode()
                }
                t++;
            },1000)
            clearInterval(run);
        }
        i++;
    }, 1000)
}



