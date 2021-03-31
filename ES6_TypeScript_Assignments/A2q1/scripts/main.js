"use strict";
var fibonacciSeries = [0, 1, 1, 2, 3, 5];
function Fibonacci(array) {
    var count = 0;
    return {
        next: function () {
            return count < array.length ? { value: array[count++], prev: array[count - 2], next: array[count] } :
                { value: undefined, prev: array[count - 1], next: undefined };
        }
    };
}
var myFib = Fibonacci(fibonacciSeries);
console.log(myFib.next()); // {value:0, prev: undefined, next:1}
console.log(myFib.next()); // {value:1, prev: 0, next:1}
console.log(myFib.next()); // {value:1, prev: 1, next:2}
console.log(myFib.next()); // {value:2, prev: 1, next:3}
console.log(myFib.next()); // {value:3, prev: 2, next:5}
console.log(myFib.next()); // {value:5, prev: 3, next:undefined}
console.log(myFib.next()); // {value:undefined, prev: 5, next:undefined}
//# sourceMappingURL=main.js.map