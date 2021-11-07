var SttShow=2;
var SttHide=1;

ChangeImg = function(){
    document.getElementById('img'+SttHide).style.display='none';
    document.getElementById('img'+SttShow).style.display='block';
    SttHide=SttShow;
    if (SttShow==3){
        SttShow=1;
    }else{
        SttShow++;
    }
}
setInterval(ChangeImg,3500);