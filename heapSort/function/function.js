var c = document.getElementById("root");
var ctx = c.getContext("2d");

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

function testShow(){
    var i = 0;
    var run = setInterval(function(){
        var a1 = (showTree[i].value).split(',')
        var a2 = (showTree[i].status).split(',')
        showNode(a1,a2)
        i++;
        if(i===showTree.length-1){
            console.log("close")
            clearInterval(run)
        }
    },500)
}

function showNode(valueInputSort,statusTrees){
    ctx.clearRect(0, 0, widthScreen, 600);
    ctx.font = "30px Times New Roman";
    ctx.fillStyle = "black";
    ctx.fillText("Mảng: ", 10,45);   
    // ctx.fillText("Mảng: ",100,45);
    var pointLeft = 95
    
    for (var i = 0;i<valueInputSort.length;i++){
        if(statusTrees[i] !== '3'){
            ctx.beginPath();
            ctx.fillStyle = ''
            ctx.arc(pointTrees[i].left+25, pointTrees[i].top, 25, 0, 2 * Math.PI);
            if (statusTrees[i]==='1'){
                ctx.fillStyle = "red";
                ctx.fill();
            }else if (statusTrees[i] === '2'){
                ctx.fillStyle = "yellow";
                ctx.fill();
            }
            ctx.stroke();
            if(i>0){
                ctx.moveTo(pointTrees[pointTrees[i].conect].left+25, pointTrees[pointTrees[i].conect].top+25);
                ctx.lineTo(pointTrees[i].left+25, pointTrees[i].top-25);
                ctx.stroke();
            }
            ctx.font = "25px Times New Roman";
            var reSize = 18
            var text = parseInt(valueInputSort[i])
            if (text>9){
                reSize = 18/2+2
            }
            if (text>99){
                reSize = 18/3
            }
            ctx.fillStyle = "black";
            ctx.fillText(text, pointTrees[i].left+reSize, pointTrees[i].top+9);   
        }
        // show phần tiêu đề
        if (statusTrees[i]==='1'){
            ctx.fillStyle = "red";
            ctx.rect(pointLeft , 20, 33, 33);
            ctx.fillRect(pointLeft , 20, 33, 33);
        }else if (statusTrees[i] === '2'){
            ctx.fillStyle = "yellow";
            ctx.rect(pointLeft , 20, 33, 33);
            ctx.fillRect(pointLeft , 20, 33, 33);
        }
        else if(statusTrees[i] === '3'){
            ctx.fillStyle = "#2db92d";
            ctx.rect(pointLeft , 20, 33, 33);
            ctx.fillRect(pointLeft , 20, 33, 33);
        }
        else{
            ctx.beginPath();
            ctx.rect(pointLeft , 20, 33, 33);
        }
        ctx.stroke();   

        ctx.font = "24px Times New Roman";
        ctx.fillStyle = "black";
        ctx.fillText(valueInputSort[i], pointLeft+5,45);   
        pointLeft += 35.5
        
    }
   
}

function xapXep(){
    getValueFromInput()
    heapSort()
    testShow()
    
}