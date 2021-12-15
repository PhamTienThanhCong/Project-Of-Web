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

function insertSortRun(){
    getValueFromInput()
    insertionSort();
    runShow();
}

function selectionSortRun(){
    getValueFromInput()
    selectionSort();
    runShow();
}

function bubbleSortRun(){
    getValueFromInput()
    bubbleSort();
    runShow();
}

function resetSortRun(){
    clearInterval(run);
    sortingRun=[];
}

function runShow(){
    var i_Loop = 0;
    if (sortingRun.length>0){
        run = setInterval(function(){
            const a1 = (sortingRun[i_Loop].local).split(',');
            const a2 = (sortingRun[i_Loop].statusIndex).split(',');
            update(a1,a2);
            i_Loop++;
            if(i_Loop===sortingRun.length){
                console.log("close");
                clearInterval(run);
            }
        },1000)
    }else{
        alert("Lỗi không thể xắp xếp");
    }   
}