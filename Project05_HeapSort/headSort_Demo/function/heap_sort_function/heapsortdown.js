function heapifyDown(valueInputSort, N, i) {
    let left = 2 * i + 1, right = 2 * i + 2, largest;

    var arrayValue = copyArray(valueInputSort)
    var arrayStatus = copyArray(statusTrees)

    // graphic {
    arrayStatus[i] = 2;
    showTree.push({
        status: convetArrayToString(arrayStatus),
        value: convetArrayToString(arrayValue),
        length: lengthTree,
        comment: TextComment
    })
    // graphic }

    if (left < N && valueInputSort[left] < valueInputSort[i]) {
        largest = left;

        // graphic {
        arrayStatus[i] = 2;
        arrayStatus[left] = 1
        arrayStatus[right] = 0

        showTree.push({
            status: convetArrayToString(arrayStatus),
            value: convetArrayToString(arrayValue),
            length: lengthTree,
            comment: TextComment
        })
        // graphic }
    }
    else {
        largest = i;
    }

    if (right < N && valueInputSort[right] < valueInputSort[largest]) {
        largest = right;

        // graphic {
        arrayStatus[i] = 2;
        arrayStatus[left] = 0
        arrayStatus[right] = 1

        showTree.push({
            status: convetArrayToString(arrayStatus),
            value: convetArrayToString(arrayValue),
            length: lengthTree,
            comment: TextComment
        })
        // graphic }
    }

    if (largest != i) {
        let t = valueInputSort[i];
        valueInputSort[i] = valueInputSort[largest];
        valueInputSort[largest] = t;

        // graphic {
        arrayStatus[i] = 1;
        arrayStatus[left] = 0
        arrayStatus[right] = 0
        arrayValue = copyArray(valueInputSort)
        showTree.push({
            status: convetArrayToString(arrayStatus),
            value: convetArrayToString(arrayValue),
            length: lengthTree,
            comment: TextComment
        })
        // graphic }

        heapifyDown(valueInputSort, N, largest);
    }
}

function buildHeapDown() {
    // graphic {
    commentShow.push({
        comment: "Xắp xếp giảm với Dãy đã cho là: ",
        array: convetArrayToString(valueInputSort),
        status: convetArrayToString(statusTrees),
    })
    // graphic }

    TextComment = "Vun đống, tìm giá trị nhỏ nhất để đặt lên đầu"
    let m = Math.floor(valueInputSort.length / 2 - 1);
    for (let i = m; i >= 0; i--) {
        heapifyDown(valueInputSort, valueInputSort.length, i);
    }

    // graphic
    TextComment = "Vun đống Thành Công, Đỉnh Đống = "+ valueInputSort[0]  
    arrayValue = copyArray(valueInputSort)
    arrayStatus = copyArray(statusTrees)
    showTree.push({
        status: convetArrayToString(arrayStatus),
        value: convetArrayToString(arrayValue),
        length: lengthTree,
        comment: TextComment
    })

    commentShow.push({
        comment: "vun đống với giá trị đỉnh đống là "+valueInputSort[0]+": ",
        array: convetArrayToString(valueInputSort),
        status: convetArrayToString(statusTrees),
    })
    // graphic
}

function heapSortDown() {

    buildHeapDown();

    for (let i = valueInputSort.length - 1; i >= 0; i--) {
        
        let t = valueInputSort[0];
        valueInputSort[0] = valueInputSort[i];
        valueInputSort[i] = t;

        // graphic {
        TextComment = "Đổi Chỗ "+valueInputSort[0]+" và "+ valueInputSort[i+1]+". Đỉnh Đống xuống cuối đống"
        statusTrees[lengthTree-1]='3'
        statusTrees[0]='1'
        arrayValue = copyArray(valueInputSort)
        arrayStatus = copyArray(statusTrees)
        showTree.push({
            status: convetArrayToString(arrayStatus),
            value: convetArrayToString(arrayValue),
            length: lengthTree,
            comment: TextComment
        })
        showTree.push({
            status: convetArrayToString(arrayStatus),
            value: convetArrayToString(arrayValue),
            length: lengthTree,
            comment: TextComment
        })
        commentShow.push({
            comment: "Đổi chỗ đỉnh đống là: "+t+" xuống đáy đống ",
            array: convetArrayToString(valueInputSort),
            status: convetArrayToString(statusTrees),
        })
        statusTrees[0]='0'
        statusTrees[i] = '3'
        lengthTree--;
        TextComment = "Vun lại đống, sau khi Đổi Đỉnh"
        // graphic }

        heapifyDown(valueInputSort, i, 0);
         
        // graphic{
        commentShow.push({
            comment: "Vun lại đống, và giá trị đống mới là: "+valueInputSort[0],
            array: convetArrayToString(valueInputSort),
            status: convetArrayToString(statusTrees),
        })
        // graphic }

    }

    // graphic {
    showTree.pop()
    statusTrees[0]='3'
    showTree.push({
        status: convetArrayToString(statusTrees),
        value: convetArrayToString(arrayValue),
        length: lengthTree,
        comment: "Xắp Xếp Thành Công"
    })
    // graphic }
    commentShow.pop()
    commentShow.push({
        comment: "Xắp xếp đống thành công",
        array: convetArrayToString(valueInputSort),
        status: convetArrayToString(statusTrees),
    })
    // graphic   
}