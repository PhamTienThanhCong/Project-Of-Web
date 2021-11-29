var c = document.getElementById("root");
var ctx = c.getContext("2d");
var run

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
    run = setInterval(function(){
        const a1 = (showTree[i].value).split(',')
        const a2 = (showTree[i].status).split(',')
        showNode(a1,a2,showTree[i].length)
        i++;
        if(i===showTree.length){
            console.log("close")
            clearInterval(run)
        }
    },300)
}

function xapXep(){
    resetValue()
    heapSort()
    testShow() 
}

function xapXepDown(){
    resetValue()
    heapSortDown()
    testShow()
}

function vunDongTang(){
    resetValue()
    buildHeap()
    testShow()
}
function vunDongGiam(){
    resetValue()
    buildHeapDown()
    testShow()
}

function resetValue(){
    if (run){
        clearInterval(run)
        run = undefined
    }
    getValueFromInput()
    showTree=[]
}