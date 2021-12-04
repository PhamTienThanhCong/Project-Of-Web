function copyArray(a){
    var c = []
    for (var i=0; i<a.length; i++){
        c[i]=a[i]
    }
    return c;
}

function convetArrayToString(a){
    var ArrayString = "";
    for (var i=0; i<a.length; i++){
        ArrayString = ArrayString + a[i]
        if(i<a.length-1){
            ArrayString = ArrayString + ","
        }
    }
    return ArrayString;
}

function insertNodeShow(index, value) {
    insertNode(index,value)
    // NodeSort()

    var node = document.createElement("div");
    node.id = nodeId[nodeValue.length - 1]
    node.innerHTML = nodeValue[nodeValue.length - 1]
    // node.style.left = pointX[nodeValue[nodeShow.length - 1].point]+"px"
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
        }else{
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