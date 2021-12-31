var DiemCc   = 0.0;
var DiemGc   = 0.0;
var DiemCk   = 0.0;
var DiemTong = 0.0;

function change(a,b,c){
    document.getElementById(a).innerText = Math.round((parseFloat(document.getElementById(b).value)*c)*100)/100
}

function reset(){
    document.getElementById('menu').innerHTML = "";
    document.getElementById('menu').innerHTML = `
    <label for="Chuyen-can">- Loại Điểm:</label>
    <div class="size4" style = "margin-left: 20px;">Cơ số 10 </div>
    <div class="size4" style = "margin-left: 70px;">Cơ số 4 </div>

    <br>
    <br>

    <label for="Chuyen-can">- Diểm chuyên cần:</label>
    <input type="text" id="Chuyen-can" placeholder="Cơ số 10">
    <div id="Chuyen-can-size-4" class="size4" style = "margin-left: 25px;">0.00</div>

    <br>
    <label for="Giua-ky">- Diểm Giữa kỳ:</label>
    <input type="text" id="Giua-ky" placeholder="Cơ số 10">
    <div id="Giua-ky-size-4" class="size4" style = "margin-left: 25px;">0.00</div>

    <br>
    <label for="Cuoi-ky">- Điểm cuối kì:</label>
    <input type="text" id="Cuoi-ky" placeholder="Cơ số 10">
    <div id="Cuoi-ky-size-4" class="size4" style = "margin-left: 25px;">0.00</div>

    <br>
    <label for="Tong-ket">- Diểm tổng:</label>
    <input type="text" id="Tong-ket" placeholder="Cơ số 10">
    <div id="Tong-ket-size-4" class="size4" style = "margin-left: 25px;">0.00</div>
    <br>
    <label for="" placeholder="Cơ số 10">- Kết quả:</label>
    
    <br>
    <br>
    <button onclick="TinhToan()">Tính Toán </button>
    <button onclick="reset()">Reset </button>
    `
}



function TinhToan(){


    document.getElementById('menu').innerHTML = `
    <label for="Chuyen-can">- Loại Điểm:</label>
    <div class="size4" style = "margin-left: 20px;">Cơ số 10 </div>
    <div class="size4" style = "margin-left: 25px;">Cơ số 4 </div>

    <br>
    <br>

    <label for="Chuyen-can">- Diểm chuyên cần:</label>
    <div class="size4 diem" style = "margin-left: 30px;">3.12</div>
    <div class="size4 diem" style = "margin-left: 25px;">3.12</div>

    <br>
    <br>

    <label for="Chuyen-can">- Diểm Giữa kỳ:</label>
    <div class="size4 diem" style = "margin-left: 30px;">3.12</div>
    <div class="size4 diem" style = "margin-left: 25px;">3.12</div>

    <br>
    <br>

    <label for="Chuyen-can">- Điểm cuối kì:</label>
    <div class="size4 diem" style = "margin-left: 30px;">3.12</div>
    <div class="size4 diem" style = "margin-left: 25px;">3.12</div>

    <br>
    <br>

    <label for="Chuyen-can">- Diểm cuối kì:</label>
    <div class="size4 diem" style = "margin-left: 30px;">3.12</div>
    <div class="size4 diem" style = "margin-left: 25px;">3.12</div>
    <br>
    <br>
    <label for="" placeholder="Cơ số 10">- Kết quả:</label>
    <div class="size4 diem" style = "margin-left: 25px;">A+</div>
    <br>
    <br>
    <button>Tính Toán </button>
    <button onclick="reset()">Reset </button>
    `
}
