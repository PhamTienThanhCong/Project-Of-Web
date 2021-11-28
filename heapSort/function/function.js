const pointTrees = [];
const widthScreen = 1000;
const widthTree = 50;
var topTree = 50;
var arrowTree = []

for (var i = 1; i <= 16; i = i * 2) {
    var valuePoint = widthScreen / (i * 2) - widthTree / 2;
    for (var j = 1; j <= i; j++) {
        var pointTree = {
            top: topTree,
            left: valuePoint,
            idTree: "tree" + Math.round(valuePoint) + topTree,
            idArrowTree: "cong" + topTree + Math.round(valuePoint),
        }
        pointTrees.push(pointTree);
        valuePoint = valuePoint + widthScreen / i;
    }
    topTree = topTree + 100
}
