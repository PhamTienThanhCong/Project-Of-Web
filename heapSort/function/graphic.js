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
    topTree = topTree + 80
}

function showNode(valueInputSort,statusTrees,length){
    ctx.clearRect(0, 0, widthScreen, 700);
    ctx.font = "20px Times New Roman";
    ctx.fillStyle = "black";
    ctx.fillText("Mảng ", 20,40);   
    // ctx.fillText("Mảng: ",100,45);
    var pointLeft = 95
    for (var i = 0;i<valueInputSort.length;i++){
        // show phần tiêu đề
        ctx.beginPath();
        if (statusTrees[i]==='1'){
            ctx.fillStyle = "red";
            ctx.rect(pointLeft , 20, 31, 31);
            ctx.fillRect(pointLeft , 20, 31, 31);
        }else if (statusTrees[i] === '2'){
            ctx.fillStyle = "#33cc33";
            ctx.rect(pointLeft , 20, 31, 31);
            ctx.fillRect(pointLeft , 20, 31, 31);
        }
        else if(statusTrees[i] === '3'){
            ctx.fillStyle = "#ffff00";
            ctx.rect(pointLeft , 20, 31, 31);
            ctx.fillRect(pointLeft , 20, 31, 31);
        }
        else{
            ctx.fillStyle = "#b3ecff";
            ctx.rect(pointLeft , 20, 31, 31);
            ctx.fillRect(pointLeft , 20, 31, 31);
        }
        ctx.stroke();   

        ctx.font = "20px Times New Roman";
        ctx.fillStyle = "black";
        if(valueInputSort[i]>9){
            ctx.fillText(valueInputSort[i], pointLeft+5,42);   
        }else{
            ctx.fillText(valueInputSort[i], pointLeft+10,42);   
        }
        
        pointLeft += 34    
    }

    for (var i=1; i<valueInputSort.length; i++){
        ctx.beginPath();
        ctx.moveTo(pointTrees[pointTrees[i].conect].left+25, pointTrees[pointTrees[i].conect].top+5);
        ctx.lineTo(pointTrees[i].left+25, pointTrees[i].top-20);
        ctx.stroke();
}


    for (var i=0; i<valueInputSort.length; i++){
        ctx.beginPath();
        ctx.fillStyle = ''
        ctx.arc(pointTrees[i].left+25, pointTrees[i].top, 20, 0, 2 * Math.PI);
        if (statusTrees[i]==='1'){
            ctx.fillStyle = "red";
            ctx.fill();
        }else if (statusTrees[i] === '2'){
            ctx.fillStyle = "#33cc33";
            ctx.fill();
        }else if (statusTrees[i] === '3'){
            ctx.fillStyle = "#ffff00";
            ctx.fill();
        }else{
            ctx.fillStyle = "#b3ecff";
            ctx.fill();
        }
        ctx.stroke();
        ctx.font = "20px Times New Roman";
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
        
        if (i>=15){
            ctx.fillText(i+1, pointTrees[i].left+13, pointTrees[i].top+40);    
        } else {
            ctx.fillText(i+1, pointTrees[i].left+50, pointTrees[i].top+5);    
        }        
    }

    // giải Thích belike
    ctx.fillStyle = "#ffff00";
    ctx.rect(50 , 500, 33, 33);
    ctx.fillRect(50 , 500, 33, 33);
    ctx.stroke(); 
    ctx.font = "20px Times New Roman";
    ctx.fillStyle = "black";
    ctx.fillText('Giá trị đã được xắp xếp', 90,525);   

    ctx.fillStyle = "#b3ecff";
    ctx.rect(370 , 500, 33, 33);
    ctx.fillRect(370 , 500, 33, 33);
    ctx.stroke();
    ctx.font = "20px Times New Roman";
    ctx.fillStyle = "black";
    ctx.fillText('Giá trị cần xắp xếp', 415,525); 

    ctx.fillStyle = "#33cc33";
    ctx.rect(650 , 500, 33, 33);
    ctx.fillRect(650 , 500, 33, 33);
    ctx.stroke();
    ctx.font = "20px Times New Roman";
    ctx.fillStyle = "black";
    ctx.fillText('Giá trị các nốt cha', 690,525);   

    ctx.fillStyle = "red";
    ctx.rect(920 , 500, 33, 33);
    ctx.fillRect(920 , 500, 33, 33);
    ctx.stroke();
    ctx.font = "20px Times New Roman";
    ctx.fillStyle = "black";
    ctx.fillText('Giá trị Thay thế nốt cha',960,525);     
}

// var commentShow = document.getElementById('comment');

// var show = document.createElement('div');
// show.innerHTML = 'hello'
// show.className = 'node-cha'
// document.getElementById('comment').appendChild(show);

function showCommentToDesktop(){
    for(var i = 0; i<commentShow.length; i++){
        var idnode = "node"+i+"";
        var show = document.createElement('div');
        var showChill1 = document.createElement('div');
        var showChill2 = document.createElement('div');
        show.className = "node-cha";
        show.id = idnode;
        showChill1.className = "nodes-comment"
        showChill2.className = "nodes-comment-count"
        showChill1.innerHTML = "* Lượt "+i+": "+commentShow[i].comment
        showChill2.innerHTML = "- Array => "
        show.appendChild(showChill1)
        show.appendChild(showChill2)
        
        
        document.getElementById('comment').appendChild(show);
        showChillCommentToDesktop(i)
    }
}

function showChillCommentToDesktop(i){
    var a=commentShow[i].array;
    var aStatus = commentShow[i].status
    var aChills = a.split(',')
    var aStatusChill = aStatus.split(',')
    var idnode = "node"+i+"";
    for (var i = 0; i<aChills.length; i++){
        var nodechills = document.createElement('div');
        nodechills.className = "nodes"
        if (aStatusChill[i] === '3'){
            nodechills.style.backgroundColor = "#ffff00";
        }
        nodechills.innerHTML = aChills[i]
        document.getElementById(idnode).appendChild(nodechills)
    }
}

function deleteCommentShow(){
    var myobj = document.getElementById("comment");
    myobj.remove();
    var myobj = document.createElement("div");
    var myojbChill = document.createElement("h2");
    myojbChill.innerHTML = "Comment và giải thích"
    myobj.appendChild(myojbChill);
    myobj.id="comment"
    document.body.appendChild(myobj);
}