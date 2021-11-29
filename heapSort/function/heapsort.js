function heapify(valueInputSort, N, i){
    let left = 2*i + 1, right = 2*i + 2, largest;

    var arrayValue = copyArray(valueInputSort)
	var arrayStatus = copyArray(statusTrees)
    
    // graphic
    arrayStatus[i]=1;
    showTree.push({
        status: convetArrayToString(arrayStatus),
        value: convetArrayToString(arrayValue)
    })
    // graphic

    if(left < N && valueInputSort[left] > valueInputSort[i]) {
        largest = left;
        // graphic
        arrayStatus[i]=2;
        arrayStatus[left] = 1
        arrayStatus[right] = 0

        showTree.push({
            status: convetArrayToString(arrayStatus),
            value: convetArrayToString(arrayValue)
        })
        // graphic
    }
    else {
        largest = i;
    }
		 
    if(right < N && valueInputSort[right] > valueInputSort[largest]) {
        largest = right;
        // graphic
        arrayStatus[i]=2;
        arrayStatus[left] = 0
        arrayStatus[right] = 1

        showTree.push({
            status: convetArrayToString(arrayStatus),
            value: convetArrayToString(arrayValue)
        })
        // graphic
    }
		 
    if(largest != i){
        let t = valueInputSort[i];
        valueInputSort[i] = valueInputSort[largest];
        valueInputSort[largest] = t;
        // graphic
        arrayStatus[i]=1;
        arrayStatus[left] = 0
        arrayStatus[right] = 0
        arrayValue = copyArray(valueInputSort)
        showTree.push({
            status: convetArrayToString(arrayStatus),
            value: convetArrayToString(arrayValue)
        })
        // graphic
        heapify(valueInputSort,N, largest);
    }
}
		     
function buildHeap(){
    let m = Math.floor(valueInputSort.length / 2 - 1);
    for(let i = m; i >= 0; i--)
        heapify(valueInputSort, valueInputSort.length, i);
}
		     
function heapSort(){
    buildHeap();
		     
    for(let i = valueInputSort.length - 1; i >= 0; i--)    {
        let t = valueInputSort[0];
        valueInputSort[0] = valueInputSort[i];
        valueInputSort[i] = t;
        statusTrees[i]='3'
        heapify(valueInputSort, i, 0);
    }
}