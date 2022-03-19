var data_binance = [];
var data
function getBinance() {
    var current = "https://quanlychitieuthanhcong.000webhostapp.com/jsonPosessing/binance_api/1";
    var current = "http://quan_ly_chi_tieu.test/jsonPosessing/binance_api/1"
    $.ajax({
        type: "GET",
        url: current,
        data: "",
        dataType: "json",
        success: function (response) {
            data = response
            data = data.data


        }
    });
}
$(document).ready(function () {
    getBinance()
});