// const arrow = arrowLine({source: '#test1', destination: '#test2', thickness: 3, color: 'red', endpoint:{size: 0.5}});
// const arrow = arrowLine({x: 20+35, y: 250+15}, {x: 400, y: 400+15},{thickness: 3, color: 'red', endpoint:{size: 0.5}});
// update({color: "red",endpoint:{size: 0.5}})
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
var arrow = []

for (var i = 0; i < pointX.length-1; i++) {
    arrow.push(arrowLine({x: pointX[i]+35+(window.innerWidth-widthScreen)/2, y: 378}, {x: pointX[i]+(window.innerWidth-widthScreen)/2+sizePoint, y: 378},{thickness: 3, color: '#ccc', endpoint:{size: 0.5}}))
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
// insertNodeShow(0, 1)

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
            document.getElementById(show[i]).style.border = "2px solid red"
        } else if(i === show.length){
            var newnode = document.createElement("div");
            newnode.className = "chill-show"
            newnode.style.left = document.getElementById(show[i-1]).style.left
            newnode.style.top = document.getElementById(show[i-1]).style.top
            newnode.id = "move-node"
            newnode.style.backgroundColor = "red"
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
            // arrow[number[i]].update({color: "red",endpoint:{size: 0.5}})
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
            arrow[nodeId.length-2].update({thickness: 3, color: 'black', endpoint:{size: 0.5}})
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
                    arrow[nodeId.length-1].update({thickness: 3, color: '#ccc', endpoint:{size: 0.5}})
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

function NodeSort(show,number) {
    let n = number.length;
        for (let i = 0; i < n-1; i++) {
            for (let j = i+1; j < n; j++) {
                if(number[j]<number[i]){
                    var temp = number[i]
                    number[i] = number[j]
                    number[j] = temp
                    var temp = show[i]
                    show[i] = show[j]
                    show[j] = temp
                }
            }
        }
}

function resetNode() {
    for (var j = 0; j < nodeId.length; j++) {
        document.getElementById(nodeId[j]).style.border = "1px solid black"
        document.getElementById(nodeId[j]).style.left = pointX[nodePoint[j]]+"px"
    }   
}



