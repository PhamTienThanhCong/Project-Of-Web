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

function runShow(){
    run = setInterval(function(){
        rangeInput.value = i_Loop
        const a1 = (showTree[i_Loop].value).split(',')
        const a2 = (showTree[i_Loop].status).split(',')
        valueTextComment.innerHTML =  showTree[i_Loop].comment
        showNode(a1,a2,showTree[i_Loop].length)
        i_Loop++;
        if(i_Loop===showTree.length){
            console.log("close")
            clearInterval(run)
        }
    },fasterValue)
}

function testShow(){
    rangeInput.max = showTree.length;
    runShow()
}

function SetRange(){
    clearInterval(run)
    i_Loop = rangeInput.value-1
    runShow()
}

rangeFaster.onchange = function(){
    clearInterval(run)
    fasterValue = 1900 - rangeFaster.value
    runShow()
}

rangeInput.onchange = function(){
    SetRange()
}

function xapXep(){
    resetValue()
    heapSort()
    showCommentToDesktop()
    testShow() 
}

function xapXepDown(){
    resetValue()
    heapSortDown()
    showCommentToDesktop()
    testShow()
}

function vunDongTang(){
    resetValue()
    buildHeap()
    showCommentToDesktop()
    testShow()
    inputValue.value = convetArrayToString(valueInputSort)
}
function vunDongGiam(){
    resetValue()
    buildHeapDown()
    showCommentToDesktop()
    testShow()
    inputValue.value = convetArrayToString(valueInputSort)
}

function resetValue(){
    if (run){
        clearInterval(run)
        run = undefined
    }
    getValueFromInput()
    deleteCommentShow()
    rangeInput.value = 0
    rangeInput.max = 1
    showTree=[]
    commentShow = []
    i_Loop = 0
}