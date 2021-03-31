"use strict";
var arr = ["Tom", "Jerry", "Oggy"];
function convertArray(array) {
    var l = array.length;
    var array2 = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        var obj = {
            name: element,
            length: element.length
        };
        array2.push(obj);
    }
    return array2;
}
console.log(convertArray(arr)); // this will return an array [{name: "Tom", length: 3} {name: "Jerry", length: 5} {name: "Oggy", length: 4}].
//# sourceMappingURL=main.js.map