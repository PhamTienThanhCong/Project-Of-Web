var canvas = document.getElementById("myCanvas");
var head = canvas.getContext("2d");
var lever = document.getElementById("lever");
var bottmStart = document.getElementsByClassName("game-bottom-1");
var bottmStartMobie = document.getElementsByClassName("start-game");
var img = document.getElementById("scream");
var imgHead = document.getElementById("headSnake");

var canvas = document.getElementsByTagName('canvas')[0];

const element = document.querySelector('#myCanvas')
const style = getComputedStyle(element)
var widthOfDesktop = style.width //the RGB value
widthOfDesktop = widthOfDesktop.substring(0, widthOfDesktop.length-2);
widthOfDesktop = Number(widthOfDesktop)

//sử lý số xấu
widthOfDesktop = Math.floor(widthOfDesktop/14)*14;

// dặt hàm giá trị mặc định
canvas.width  = widthOfDesktop;
canvas.height = widthOfDesktop;

var headOfDesktop = widthOfDesktop/14

let myVar
// Khai báo biến
var maxDiem = 0;
var x = 0;
var y = headOfDesktop*2;
var xChange = 0;
var yChange = 0;
var keyOld = 'd';
var key;
var keyStop = 1;
var xFruit;
var yFruit;
var Diem = 0;
var SucKhoe = 25;
var sizeOfSnake = 3;
var bodyX = [0,0,0];
var bodyY = [headOfDesktop,0,0];
var xStop = 0;
var yStop = 0;
var time = leverChoice();
var runValue = 0;




function setvalue(){
    x = 0;
    y = headOfDesktop*2;
    xChange = 0;
    yChange = 0;
    keyOld = 'd';
    SucKhoe = 20;
    key;
    keyStop = 1;
    xFruit = (Math.floor(Math.random() * 14))*headOfDesktop;
    yFruit = (Math.floor(Math.random() * 14))*headOfDesktop;
    Diem = 0;
    sizeOfSnake = 3;
    bodyX = [0,0,0];
    bodyY = [headOfDesktop,0,0];
    xStop = 0;
    yStop = 0;
    time = leverChoice();
    runValue = 0;
} 
setvalue()

// xử lý lever
function leverChoice(){
    if (lever.value === "1"){
        return 500;
    }else if (lever.value === "2"){
        return 350;
    }
    else if (lever.value === "3"){
        return 150;
    }
    else if (lever.value === "4"){
        return 80;
    }
}

function upCase(){
    if (keyOld !== "s" && keyStop === 1){
        xChange = -headOfDesktop;
        yChange = 0;
        keyOld = "w";
    }
}
function downCase(){
    if (keyOld !== "w" && keyStop === 1) {
        xChange = headOfDesktop;
        yChange = 0;
        keyOld = "s";
    }
}
function leftCase(){
    if (keyOld !== "d" && keyStop === 1) {
        yChange = -headOfDesktop;
        xChange = 0;
        keyOld = 'a';
    }
}
function rightCase(){
    if (keyOld !== "a" && keyStop === 1) {
        yChange = headOfDesktop;
        xChange = 0;
        keyOld = 'd';
    }
}
// sử lý phím khi nhập vào
function keyChange(event) {
    key = event.key;
    if (key === "w" && keyOld !== "s" && keyStop === 1) {
        xChange = -headOfDesktop;
        yChange = 0;
        keyOld = key;
    }
    else if (key === "s" && keyOld !== "w" && keyStop === 1) {
        xChange = headOfDesktop;
        yChange = 0;
        keyOld = key;
    }
    else if (key === "a" && keyOld !== "d" && keyStop === 1) {
        yChange = -headOfDesktop;
        xChange = 0;
        keyOld = key;
    }
    else if (key === "d" && keyOld !== "a" && keyStop === 1) {
        yChange = headOfDesktop;
        xChange = 0;
        keyOld = key;
    }
    else if (key === " ") {
        stopSnake();
    }
    else if (key === "f") {
        exitGame();
    }
}
// thoát game loop
function exitGame(){
    alert('Bạn Đã Thoát Khỏi Trò Chơi \nSố điểm của bạn là: '+ Diem+'');
    outGame();
}

// Thoát Game
function outGame(){
    head.clearRect(y, x, headOfDesktop, headOfDesktop);
    head.clearRect(yFruit,xFruit, headOfDesktop, headOfDesktop);
    for (var i=0; i<sizeOfSnake-1; i++){
        head.clearRect(bodyY[i], bodyX[i], headOfDesktop, headOfDesktop); 
    }
    setvalue();
    clearInterval(myVar);
}

// Dừng con rắn lại Đoạn này code hơi rối :)
function stopSnake(){
    // Check Trường hợp rắn đang chạy
    if (keyStop === 1){
        // set điều kiện dừng
        keyStop = keyStop*-1;
        console.log("stop");
        // lưu giá trị cũ và set nó bằng 0
        xStop = xChange;
        yStop = yChange;
        yChange = 0;
        xChange = 0;
    }
    // Check Trường hợp rắn đứng im
    else if (keyStop === -1){
        console.log("run");
        // trả lại giá trị chạy cho rắn
        yChange = yStop;
        xChange = xStop;
        // set điều kiện dừng và trả lại giá trị chạy
        keyStop = keyStop*-1
    }
}

// Tạo ra quả ngẫu nhiên
function createFruit(){
    xFruit = (Math.floor(Math.random() * 14))*headOfDesktop;
    yFruit = (Math.floor(Math.random() * 14))*headOfDesktop;
}
createFruit()

function CheckCreateFruit(){
    var i=0;
    while (i <= sizeOfSnake-1){
        if (bodyY[i]===yFruit && bodyX[i]===xFruit){
            createFruit();
            i = 0;
        }
        i++;
    }    
}
// Kiểm tra xem có ăn quả khum
function checkEat(){
    if (xFruit === x && yFruit === y){
        // tạo mới và thêm điểm khi ăn
        createFruit();
        // Kiểm tra điểm xem có bị dính thân ko
        CheckCreateFruit()
        Diem += 5;
        SucKhoe += 25;
        // tăng kích thước dương vật
        sizeOfSnake ++;
    }
}


// Kiểm tra Chết
function checkDie(){
    var checkAgain = true;
    // Kiểm tra Cắn vào thân
    for (var i = 0; i < sizeOfSnake-1; i++){
        if (bodyY[i]===y && bodyX[i]===x){
            alert("Ơ Kìa Bạn Cắn vào đuôi mình rùi :))\nĐiểm của bạn là " + Diem + "");
            checkAgain = false;
        }
    }
    // kiểm tra đâm vô tường
    if (x > widthOfDesktop-headOfDesktop || x < 0 || y > widthOfDesktop-headOfDesktop || y < 0){
        checkAgain = false;
        alert("Ơ Kìa Bạn Đâm vào Tường rồi :))\nĐiểm của bạn là " + Diem + "");
    }
    else if (SucKhoe < 1){
        checkAgain = false;
        alert("Rắn Của Bạn đói chết rồi :((\nĐiểm của bạn là " + Diem + "");
    }
    // kiểm tra từ Bỏ
    // check trường hợp
    if (checkAgain === false){
        outGame()
        return false;
    }
    return true;
}

// Xử Lý Dữ Liệu Phần Thân
function bodySamsung(){
    if (keyStop === 1  && (xChange !== 0 || yChange !== 0)){
        for (var i=sizeOfSnake;i>0;i--){
            bodyY[i] = bodyY[i-1];
            bodyX[i] = bodyX[i-1]; 
        }
        bodyX[0] = x;
        bodyY[0] = y;
        Diem += 1;
        SucKhoe -= 1;
        if (Diem >= maxDiem){
            maxDiem = Diem;
        }
    }
}

function changeScreen(){
    // in Ra Màn Hình phần quả
    head.drawImage(img,yFruit,xFruit,headOfDesktop,headOfDesktop); 
    // in ra màn hình phần thân
    for (var i=0; i<sizeOfSnake-1; i++){
        head.fillStyle = 'rgb(0, 102, 0)';
        head.fillRect(bodyY[i], bodyX[i], headOfDesktop, headOfDesktop);
    }
    if (keyStop === 1 && (xChange !== 0 || yChange !== 0)){
        head.clearRect(bodyY[sizeOfSnake -1], bodyX[sizeOfSnake -1], headOfDesktop, headOfDesktop); 
    }
    // in ra màn hình phần đầu
    x = x + xChange;
    y = y + yChange;
    head.drawImage(imgHead,y,x,headOfDesktop,headOfDesktop);
}

function runCode() {
    document.addEventListener("keydown", keyChange);
    if (checkDie() === true) {
        checkEat();
        bodySamsung();
        changeScreen(); 
        document.getElementById("number-goals").innerHTML = "Điểm Của Bạn Là: " + Diem;
        document.getElementById("number-health").innerHTML = "Máu Của Rắn Là: " + SucKhoe;
        document.getElementById("number-goal-max").innerHTML = "Điểm Cao Nhất Là: " + maxDiem;
    }
};

function startOfClick(){
    if (runValue === 0){
        runValue = 1;
        clearInterval(myVar);
        time = leverChoice();
        myVar = setInterval(runCode, time);
    } 
}

bottmStart[0].onclick = function() {
    startOfClick()
}
bottmStartMobie[0].onclick = function() {
    startOfClick()
}

// let myVar = setInterval(runCode, time);
function startGame(){
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter'){
            startOfClick();
        }
    })
}

startGame();