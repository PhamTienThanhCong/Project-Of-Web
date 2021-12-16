function heapify(valueInputSort, N, i){
    let left = 2*i + 1, right = 2*i + 2, largest;

    var arrayValue = copyArray(valueInputSort)
	var arrayStatus = copyArray(statusTrees)
    
    // graphic
    arrayStatus[i]=2;
    showTree.push({
        status: convetArrayToString(arrayStatus),
        value: convetArrayToString(arrayValue),
        length:lengthTree,
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
            value: convetArrayToString(arrayValue),
            length:lengthTree,
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
            value: convetArrayToString(arrayValue),
            length:lengthTree,
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
            value: convetArrayToString(arrayValue),
            length:lengthTree,
        })
        // graphic

        heapify(valueInputSort,N, largest);
    }
}
		     
function buildHeap(){
    commentShow.push({
        array: convetArrayToString(valueInputSort),
        status: convetArrayToString(statusTrees),
    })

    let m = Math.floor(valueInputSort.length / 2 - 1);
    for(let i = m; i >= 0; i--){
        heapify(valueInputSort, valueInputSort.length, i);
    }
    // graphic
    arrayValue = copyArray(valueInputSort)
    arrayStatus = copyArray(statusTrees)
    showTree.push({
        status: convetArrayToString(arrayStatus),
        value: convetArrayToString(arrayValue),
        length: lengthTree,
    })

    commentShow.push({
        array: convetArrayToString(valueInputSort),
        status: convetArrayToString(statusTrees),
    })

    // graphic
}
		     
function heapSort(){

    buildHeap();
    
    
    for(let i = valueInputSort.length - 1; i >= 0; i--)    {
        let t = valueInputSort[0];
        valueInputSort[0] = valueInputSort[i];
        valueInputSort[i] = t;  
        // graphic

        statusTrees[lengthTree-1]='3'
        statusTrees[0]='1'
        arrayValue = copyArray(valueInputSort)
        arrayStatus = copyArray(statusTrees)
        showTree.push({
            status: convetArrayToString(arrayStatus),
            value: convetArrayToString(arrayValue),
            length: lengthTree,
        })
        showTree.push({
            status: convetArrayToString(arrayStatus),
            value: convetArrayToString(arrayValue),
            length: lengthTree,
        })

        commentShow.push({
            array: convetArrayToString(valueInputSort),
            status: convetArrayToString(statusTrees),
        })
        // graphic   
        statusTrees[i]='3' 
        lengthTree--; 
        heapify(valueInputSort, i, 0);
        commentShow.push({
            array: convetArrayToString(valueInputSort),
            status: convetArrayToString(statusTrees),
        })
    }
    // graphic   
    statusTrees[0]='3'
    showTree.pop()
    showTree.push({
        status: convetArrayToString(statusTrees),
        value: convetArrayToString(arrayValue),
        length: lengthTree,
    })

    commentShow.pop()
    commentShow.push({
        array: convetArrayToString(valueInputSort),
        status: convetArrayToString(statusTrees),
    })
    // graphic   
}