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
    document.getElementById("button-image").src = "public/images/play-buttton.png"
    run = setInterval(function(){
        doRun=true
        rangeInput.value = i_Loop
        const a1 = (showTree[i_Loop].value).split(',')
        const a2 = (showTree[i_Loop].status).split(',')
        showNode(a1,a2,showTree[i_Loop].length)
        i_Loop++;
        if(i_Loop===showTree.length){
            console.log("close")
            clearInterval(run)
        }
    },fasterValue)
}

function stopShow(){
    if (showTree.length){
        if (doRun){
            document.getElementById("button-image").src ="public/images/play.png"
            clearInterval(run)
            doRun=false
        } 
        else{
            doRun=true
            SetRange()
        }
    }
}

function testShow(){
    rangeInput.max = showTree.length;
    runShow()
}

function SetRange(){
    if (showTree.length){
        if(doRun){
            clearInterval(run)
            i_Loop = rangeInput.value-1
            fasterValue = 1900 - rangeFaster.value
            runShow()
        }
    }
}

rangeFaster.onchange = function(){
    SetRange()
}

rangeInput.onchange = function(){
    SetRange()
}

function xapXep(){
    getValueFromInput()
    if(valueInputSort.length){
        resetValue()
        heapSort()
        showCommentToDesktop()
        testShow() 
    }
}

function xapXepDown(){
    getValueFromInput()
    if(valueInputSort.length){
        resetValue()
        heapSortDown()
        showCommentToDesktop()
        testShow()
    }
}

function vunDongTang(){
    getValueFromInput()
    if(valueInputSort.length){
        resetValue()
        buildHeap()
        showCommentToDesktop()
        testShow()
        inputValue.value = convetArrayToString(valueInputSort)
    }
}
function vunDongGiam(){
    getValueFromInput()
    if(valueInputSort.length){
        resetValue()
        buildHeapDown()
        showCommentToDesktop()
        testShow()
        inputValue.value = convetArrayToString(valueInputSort)
    }
}

function resetValue(){
    getValueFromInput()
    if(valueInputSort.length){
        if (run){
            clearInterval(run)
            run = undefined
        }
        deleteCommentShow()
        rangeInput.value = 0
        rangeInput.max = 1
        showTree=[]
        commentShow = []
        i_Loop = 0
    }
}

function resetAll(){
    getValueFromInput()
    resetValue()
    valueInputSort=[]
    inputValue.value=""
    ctx.clearRect(0, 0, widthScreen, 500);
    document.getElementById("button-image").src ="public/images/stop-button.png"
}