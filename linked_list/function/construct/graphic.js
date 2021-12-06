const widthScreen = 1000;
var nodes = [];
const textAlertCode = document.getElementById('textAlertCode')
var sizeWindow

if (window.innerWidth>1000){
    sizeWindow = (window.innerWidth-widthScreen)/2
}else{
    sizeWindow = window.innerWidth - widthScreen
}

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
    arrow.push(arrowLine({x: pointX[i]+35+sizeWindow, y: 378}, {x: pointX[i]+sizeWindow+sizePoint, y: 378},{thickness: 3, color: '#ccc', endpoint:{size: 0.5}}))
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
    // ll.removeFrom(index);
    if (document.getElementById("move-node")){
        document.getElementById("move-node").remove()
    }

    textAlertCode.innerHTML = "code: find node, tìm tới phần tử index"

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
            textAlertCode.innerHTML = "code: find Node, sao chép phẩn tử và đưa ra ngoài"
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
                    textAlertCode.innerHTML = "code: find Node, tìm kiếm node hoàn thành"
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
    if (index > 0){
        textAlertCode.innerHTML = "code: Insert node, Tìm đến phần tử index - 1"
    }else{
        textAlertCode.innerHTML = "code: Insert node vào vị trí đầu tiên"
    }
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
            textAlertCode.innerHTML = "code: Insert node, đẩy các phần tử còn lại"
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
                    textAlertCode.innerHTML = "code: Insert node, Chèn node mới vào"
                }else if (t === 2){
                    clearInterval(run2);
                    resetNode()
                    console.log("stop Insert") 
                    textAlertCode.innerHTML = "code: Insert node, hoàn thành"
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
    if (index > 0){
        textAlertCode.innerHTML = "code: delete Node ở phần tử đầu tiên"
    }else{
        textAlertCode.innerHTML = "code: delete Node, tìm tới phần tử index - 1"
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
            textAlertCode.innerHTML = "code: delete Node, tìm thấy phần tử cần xóa"
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
                    textAlertCode.innerHTML = "code: delete Node, di chuyển phần tử đó ra khỏi node"
                    document.getElementById("move-node").style.top = "280px"
                }else if(t === 1){
                    document.getElementById("move-node").style.left = "60px"; 
                }else if (t === 2){
                    arrow[nodeId.length-1].update({thickness: 3, color: '#ccc', endpoint:{size: 0.5}})
                    console.log("stop Delete")
                    clearInterval(run2);
                    resetNode()
                    textAlertCode.innerHTML = "code: delete Node, nối node lại với nhau và hoàn thành"
                }
                t++;
            },1000)
            clearInterval(run);
        }
        i++;
    }, 1000)
}

function hoverAll(){
    if (document.getElementById("move-node")){
        document.getElementById("move-node").remove()
    }

    var show = []
    var number = []
    for (var i = 0; i < nodeValue.length; i++) {
        show.push(nodeId[i])
        number.push(nodePoint[i])
    }
    NodeSort(show, number)
    var i = 0;
    const run = setInterval(function () {
        if (i < show.length) {
            document.getElementById(show[i]).style.border = "2px solid red"
        }
        if (i === show.length) {
            document.getElementById(show[i-1]).style.backgroundColor = "red"
        }
        if(i > show.length){
            clearInterval(run);
            console.log("stop hover")
            resetNode()
            textAlert.innerHTML = "Thông báo: vị trí quá lớn không phù hợp"
            textAlertCode.innerHTML = "code: Fail"
            alert("Lỗi phần tử tìm kiếm không tồn tại")
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
        document.getElementById(nodeId[j]).style.backgroundColor = "cadetblue"
        document.getElementById(nodeId[j]).style.border = "1px solid black"
        document.getElementById(nodeId[j]).style.left = pointX[nodePoint[j]]+"px"
    }   
}

window.addEventListener('resize', function(event) {
    if (window.innerWidth>1000){
        sizeWindow = (window.innerWidth-widthScreen)/2
    }else{
        sizeWindow = window.innerWidth - widthScreen
    }
    for (var i = 0; i < arrow.length; i++) {
        arrow[i].update({source: {x: pointX[i]+35+sizeWindow, y: 378},destination: {x: pointX[i]+sizeWindow+sizePoint, y: 378} });
    }
}, true);


