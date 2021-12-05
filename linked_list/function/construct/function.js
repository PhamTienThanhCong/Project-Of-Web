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

function resetNode() {
    for (var j = 0; j < nodeId.length; j++) {
        document.getElementById(nodeId[j]).style.border = "1px solid black"
        document.getElementById(nodeId[j]).style.left = pointX[nodePoint[j]]+"px"
    }
}


function NodeSort(show,number) {
    let n = number.length;
        for (let i = 0; i < n-1; i++) {
            for (let j = i+1; j < n; j++) {
                if(number[j]<number[i]){
                    var temp = number[i]
                    number[i] = number[j]
                    number[j] = temp
                    var temp = show[i]
                    show[i] = show[j]
                    show[j] = temp
                }
            }
        }
}