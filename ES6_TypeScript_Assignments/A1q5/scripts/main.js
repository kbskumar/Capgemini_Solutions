"use strict";
//5.a
function add(x, y) {
    if (x === void 0) { x = 10; }
    if (y === void 0) { y = 20; }
    return x + y;
}
console.log(add()); // this will return 30 because it is using the default parameter values
console.log(add(45, 20)); // this will return 65
//-----------------------------------------------------------------------------------------
// 5.b 
function userFriends(username) {
    var friends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        friends[_i - 1] = arguments[_i];
    }
    for (var i in friends) {
        console.log(username + " " + friends[i]);
    }
}
userFriends('saurabh', 'aman', 'aditya', 'harsh', 'karan');
// the output of the above function is:
// saurabh aman
// saurabh aditya
// saurabh harsh
// saurabh karan
//------------------------------------------------------------------------------
function printCapitalNames(n1, n2, n3, n4, n5) {
    console.log(n1.toUpperCase());
    console.log(n2.toUpperCase());
    console.log(n3.toUpperCase());
    console.log(n4.toUpperCase());
    console.log(n5.toUpperCase());
}
var arr = ['aman', 'arya', 'sarthak', 'saurabh', 'gaurav'];
printCapitalNames.apply(void 0, arr);
// this will print :
// AMAN 
// ARYA 
// SARTHAK 
// SAURABH 
// GAURAV
//----------------------------------------------------------------
//# sourceMappingURL=main.js.map