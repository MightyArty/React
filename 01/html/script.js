function func(operation) {
    var x = Number(document.getElementById("x").value);
    var y = Number(document.getElementById("y").value);
    var res = 0;
    switch (operation) {
        case "Add":
            res = Add(x, y);
            break;
        case "Sub":
            res = Sub(x, y);
            break;
        case "Mul":
            res = Mul(x, y);
            break;
        case "Div":
            res = Div(x, y);
            break;
        default:
            break;
    }
    document.getElementById("res").innerText = "result = ".concat(res);
}
var Add = function (x, y) { return x + y; };
var Sub = function (x, y) { return x - y; };
var Mul = function (x, y) { return x * y; };
var Div = function (x, y) { return x / y; };
