// Nguồn: https://www.section.io/engineering-education/sorting-algorithms-in-js/
function insertionSort() {
    sortingRun=[]; 
    let i, key, keyIndex, j; 
    for (i = 1; i < arrayValue.length; i++){ 
        key = arrayValue[i]; 
        j = i - 1; 
        // code đồ họa
        keyIndex = index[i];
        statusArray[i] = '2'
        sortingRun.push({
            local: convetArrayToString(index),
            statusIndex: convetArrayToString(statusArray)
        })

        if(arrayValue[j] < key){
          keyIndex = index[i];
          statusArray[i] = '2'
          statusArray[i-1] = '1'
          sortingRun.push({
                local: convetArrayToString(index),
                statusIndex: convetArrayToString(statusArray)
          })
          statusArray[i] = '0'
          statusArray[i-1] = '0'
        }

        // code đồ họa
        while (j >= 0 && arrayValue[j] > key){ 
          // code đồ họa
          statusArray[j+1] = '2'
          statusArray[j] = '1'
          sortingRun.push({
              local: convetArrayToString(index),
              statusIndex: convetArrayToString(statusArray)
          })
          // code đồ họa
          arrayValue[j + 1] = arrayValue[j]; 
          // code đồ họa
          index[j+ 1] = index[j];
          index[j] = keyIndex;
          statusArray[j+1] = '0'
          statusArray[j] = '2'
          sortingRun.push({
              local: convetArrayToString(index),
              statusIndex: convetArrayToString(statusArray)
          })
          statusArray[j+1] = '0';
          statusArray[j] = '0';
          // code đồ họa
          j = j - 1; 
        } 
        // code đồ họa
        statusArray[i] = '0';
        // code đồ họa
        arrayValue[j + 1] = key; 
    }
    for (let t = 0; t < statusArray.length; t++){
      statusArray[t]='3';
      }
      sortingRun.push({
          local: convetArrayToString(index),
          statusIndex: convetArrayToString(statusArray)
      }) 
} 

function selectionSort() {
    sortingRun=[];
    let min;
    for (let i = 0; i < arrayValue.length; i++) {
      // code đồ họa
      statusArray[i] = '2'
      sortingRun.push({
        local: convetArrayToString(index),
        statusIndex: convetArrayToString(statusArray)
      })
      // code đồ họa
      min = i;
      for (let j = i + 1; j < arrayValue.length; j++) {
        // code đồ họa
        statusArray[j] = '4'
        sortingRun.push({
            local: convetArrayToString(index),
            statusIndex: convetArrayToString(statusArray)
        })
        statusArray[j] = '0'
        // code đồ họa
        if (arrayValue[j] < arrayValue[min]) {
          // code đồ họa
          statusArray[min] = '0';
          statusArray[i] = '2'
          statusArray[j] = '1'
          sortingRun.push({
            local: convetArrayToString(index),
            statusIndex: convetArrayToString(statusArray)
          })
          // code đồ họa
          min = j;
        }
      }
      if (min !== i) {
        var temp = arrayValue[i];
        arrayValue[i] = arrayValue[min];
        arrayValue[min] = temp;

        var t = index[i];
        index[i] = index[min];
        index[min] = t;
      }
      // code đồ họa
      statusArray[min] = '0';
      statusArray[i] = '3'
      sortingRun.push({
        local: convetArrayToString(index),
        statusIndex: convetArrayToString(statusArray)
      })
      // code đồ họa
    }
}

function bubbleSort(){
    sortingRun=[];
    for(let i = 0; i < arrayValue.length; i++){
        var first = true;
        for(let j = 0; j < arrayValue.length - i - 1; j++){
          // code đồ họa
          if (first){
            first = false;
            statusArray[j] = '2';
            sortingRun.push({
                local: convetArrayToString(index),
                statusIndex: convetArrayToString(statusArray)
            })
          }
            statusArray[j] = '2';
            statusArray[j+1] = '1';
            sortingRun.push({
                local: convetArrayToString(index),
                statusIndex: convetArrayToString(statusArray)
            })
          // code đồ họa
            if(arrayValue[j + 1] < arrayValue[j]){        
                var teamp = arrayValue[j + 1];
                arrayValue[j + 1] = arrayValue[j];
                arrayValue[j] = teamp; 

                // code đồ họa
                statusArray[j] = '0';
                statusArray[j+1] = '2';
                var t = index[j + 1];
                index[j + 1] = index[j];
                index[j] = t;
                sortingRun.push({
                    local: convetArrayToString(index),
                    statusIndex: convetArrayToString(statusArray)
                })          
            } else{
              first = true;
            }
            statusArray[j] = '0';
            statusArray[j+1] = '0';  
            // code đồ họa 
        }
      statusArray[arrayValue.length - i - 1] = '3';
    };
};