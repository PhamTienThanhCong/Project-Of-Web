const inputValue = document.getElementById('input');
var arrayValue = [];

function getValueFromInput() {
    var a = inputValue.value;
    arrayValue = [];
    var b = a.split(',');
    for (var i=0; i <b.length; i++) {
        if (b[i] !== ""){
            arrayValue[i]=parseInt(b[i]);    
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