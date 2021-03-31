"use strict";
var x = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 20);
});
var y = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 10);
});
Promise.all([x, y]).then(function (values) {
    console.log(values[0] + values[1]);
});
//# sourceMappingURL=main.js.map