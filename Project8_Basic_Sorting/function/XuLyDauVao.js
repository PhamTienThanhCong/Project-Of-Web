const inputValue = document.getElementById('input');
var arrayValue = [];
var statusArray = [];
var index = [];
var sortingRun = []
var run;

function getValueFromInput() {
    var a = inputValue.value;
    if (a === ""){
        alert("vui lòng nhập giá trị");
        return 0;
    }
    arrayValue = [];
    index = [];
    statusArray = [];
    var b = a.split(',');
    for (var i=0; i <b.length; i++) {
        if (b[i] !== ""){
            arrayValue[i]=parseInt(b[i]);    
            index.push(i);
            statusArray.push('0')
        }       
    }
    var b = SuLyChieuCao();
    createArray(arrayValue,b);
}

function ramdomValue(){
    var a = "";
    inputValue.value = "";
    a = "" + (Math.floor(Math.random() * 30)+5)+"";
    for (var i=0; i < 9; i++) {
        a = a + ", " +(Math.floor(Math.random() * 30)+5)+"";
    }
    inputValue.value = a;
}

function SuLyChieuCao(){
    var max = Math.max(...arrayValue);
    var a = [];
    var b;
    for (var i = 0; i < arrayValue.length; i++){
        b = (arrayValue[i]/max)*350;
        a.push(b+"px");
    }
    return a;
}

