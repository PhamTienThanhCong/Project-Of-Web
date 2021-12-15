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
for (var i=0; i < 14; i++) {
    var node = document.createElement("div");
    node.innerHTML = i;
    node.className = "tree";
    node.style.left = local1[i] + "px";
    document.getElementById('main-show').appendChild(node);
}

