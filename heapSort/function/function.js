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
    
    run = setInterval(function(){
        const a1 = (showTree[i_Loop].value).split(',')
        const a2 = (showTree[i_Loop].status).split(',')
        valueTextComment.innerHTML =  showTree[i_Loop].comment
        showNode(a1,a2,showTree[i_Loop].length)
        i_Loop++;
        if(i_Loop===showTree.length){
            console.log("close")
            clearInterval(run)
        }
    },500)
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
    inputValue.value = convetArrayToString(valueInputSort)
}
function vunDongGiam(){
    resetValue()
    buildHeapDown()
    testShow()
    inputValue.value = convetArrayToString(valueInputSort)
}

function resetValue(){
    if (run){
        clearInterval(run)
        run = undefined
    }
    getValueFromInput()
    showTree=[]
    i_Loop = 0
}