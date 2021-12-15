const sizeWidth = 1000;

var local1=[]; //Dành cho số lẻ
var local2=[]; //Dành cho số chẵn

var start1 = 40.625;
var start2 = 15.625;

for (var i=0; i < 15; i++) {
    local1.push(start1);
    local2.push(start2);
    start1 = start1 + 50 + 16.6;
    start2 = start2 + 50 + 15.625;
}

function createArray(a,b){
    clear()
    for (var i=0; i < a.length; i++) {
        var index = "index"+i+"";
        var node = document.createElement("div");
        node.innerHTML = a[i];
        node.className = "tree";
        node.style.height = b[i];
        node.id = index;

        var nodeindex = document.createElement('div');
        nodeindex.innerHTML = i;
        nodeindex.className = "index";

        if (a.length % 2 === 0){
            node.style.left = local1[Math.round((15-a.length)/2)-1+i] + "px"; 
            nodeindex.style.left = local1[Math.round((15-a.length)/2)-1+i] + "px"; 
        }else{
            node.style.left = local2[Math.round((15-a.length)/2)+i] + "px";
            nodeindex.style.left = local2[Math.round((15-a.length)/2)+i] + "px";
        }
        document.getElementById('main-show').appendChild(nodeindex);
        document.getElementById('main-show').appendChild(node);
    }
}

function clear(){
    document.getElementById('main-show').remove();
    var a = document.createElement('div');
    a.id = "main-show";
    document.getElementById('main').appendChild(a);
}

function update(index,b){
    for (var i = 0; i < index.length; i++) {
        var idShow = "index"+index[i]+"";
        var a = document.getElementById(idShow);
        if (b[i]==='1'){
            a.style.backgroundColor = "#ffa64d"
        }else if(b[i]==='2'){
            a.style.backgroundColor = "red"
        }else if(b[i]==='3'){
            a.style.backgroundColor = "#0000ff"
        }else if(b[i]==='4'){
            a.style.backgroundColor = "#66a3ff"
        }else{
            a.style.backgroundColor = "#0066ff"
        }
        if (index.length % 2 === 0){
            a.style.left = local1[Math.round((15-index.length)/2)-1+i] + "px"; 
            a.style.left = local1[Math.round((15-index.length)/2)-1+i] + "px"; 
        }else{
            a.style.left = local2[Math.round((15-index.length)/2)+i] + "px";
            a.style.left = local2[Math.round((15-index.length)/2)+i] + "px";
        }
    }
}
