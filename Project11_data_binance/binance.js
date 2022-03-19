var data_binance = [];
function getBinance() {
    var current = "https://quanlychitieuthanhcong.000webhostapp.com/jsonPosessing/binance_api/1";
    $.ajax({
        type: "",
        url: "https://quanlychitieuthanhcong.000webhostapp.com/jsonPosessing/binance_api/1",
        data: "",
        dataType: "json",
        success: function (response) {
            var data = response
            data = data.data

            for (var i = 0; i < data.length; i++) {
                // data người bán
                data_binance[i].name = data[i].advertiser.nickName // Tên
                data_binance[i].orderCount = data[i].advertiser.monthOrderCount // Số lượng đã bán
                data_binance[i].success = data[i].advertiser.monthFinishRate // tỷ lệ thành công
                data_binance[i].id = data[i].advertiser.userNo // id người bán

                // data hàng
                data_binance[i].price = data[i].adv.price // Giá
                data_binance[i].CanPrice = data[i].adv.tradableQuantity // Số lượng USDT có sẵn
                data_binance[i].minPrice = data[i].adv.minSingleTransAmount // giới hạn mua nhỏ nhất
                data_binance[i].maxPrice = data[i].adv.minSingleTransAmount + data[0].adv.maxSingleTransQuantity // gới hạn mua lớn nhất
            }

        }
    });
}
$(document).ready(function () {
    getBinance()
});