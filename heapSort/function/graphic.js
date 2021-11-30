function showNode(valueInputSort,statusTrees,length){
    ctx.clearRect(0, 0, widthScreen, 700);
    ctx.font = "30px Times New Roman";
    ctx.fillStyle = "black";
    ctx.fillText("Mảng: ", 10,45);   
    // ctx.fillText("Mảng: ",100,45);
    var pointLeft = 95
    for (var i=0; i<valueInputSort.length; i++){
        ctx.beginPath();
        ctx.fillStyle = ''
        ctx.arc(pointTrees[i].left+25, pointTrees[i].top, 25, 0, 2 * Math.PI);
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
        
        if (i>=15){
            ctx.fillText(i+1, pointTrees[i].left+9, pointTrees[i].top+50);    
        } else {
            ctx.fillText(i+1, pointTrees[i].left+55, pointTrees[i].top+10);    
        }        
    }

    for (var i = 0;i<valueInputSort.length;i++){
        // show phần tiêu đề
        if (statusTrees[i]==='1'){
            ctx.fillStyle = "red";
            ctx.rect(pointLeft , 20, 33, 33);
            ctx.fillRect(pointLeft , 20, 33, 33);
        }else if (statusTrees[i] === '2'){
            ctx.fillStyle = "#33cc33";
            ctx.rect(pointLeft , 20, 33, 33);
            ctx.fillRect(pointLeft , 20, 33, 33);
        }
        else if(statusTrees[i] === '3'){
            ctx.fillStyle = "#ffff00";
            ctx.rect(pointLeft , 20, 33, 33);
            ctx.fillRect(pointLeft , 20, 33, 33);
        }
        else{
            ctx.fillStyle = "#b3ecff";
            ctx.rect(pointLeft , 20, 33, 33);
            ctx.fillRect(pointLeft , 20, 33, 33);
        }
        ctx.stroke();   

        ctx.font = "24px Times New Roman";
        ctx.fillStyle = "black";
        ctx.fillText(valueInputSort[i], pointLeft+5,45);   
        pointLeft += 35.5    
    }

    // giải Thích belike
    ctx.fillStyle = "#ffff00";
    ctx.rect(50 , 600, 33, 33);
    ctx.fillRect(50 , 600, 33, 33);
    ctx.stroke(); 
    ctx.font = "24px Times New Roman";
    ctx.fillStyle = "black";
    ctx.fillText('Giá trị đã được xắp xếp', 100,625);   

    ctx.fillStyle = "#b3ecff";
    ctx.rect(370 , 600, 33, 33);
    ctx.fillRect(370 , 600, 33, 33);
    ctx.stroke();
    ctx.font = "24px Times New Roman";
    ctx.fillStyle = "black";
    ctx.fillText('Giá trị cần xắp xếp', 425,625); 

    ctx.fillStyle = "#33cc33";
    ctx.rect(650 , 600, 33, 33);
    ctx.fillRect(650 , 600, 33, 33);
    ctx.stroke();
    ctx.font = "24px Times New Roman";
    ctx.fillStyle = "black";
    ctx.fillText('Giá trị các nốt cha', 700,625);   

    ctx.fillStyle = "red";
    ctx.rect(920 , 600, 33, 33);
    ctx.fillRect(920 , 600, 33, 33);
    ctx.stroke();
    ctx.font = "24px Times New Roman";
    ctx.fillStyle = "black";
    ctx.fillText('Giá trị Thay thế nốt cha',970,625);     
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