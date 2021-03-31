let armstrongSeries = ['000', '001', '002', '009', '010', '011'];

function Armstrong(array){
    let count = 0;
    let prev;
    let next;
    return{
        next: function(){
            return count < array.length ?{value:array[count++],prev:array[count-2], next:array[count]}:
            {value:undefined,prev:array[count-1] next:undefined};
        }
    }
}

let obj = Armstrong(armstrongSeries);
console.log(obj.next()); // {value: "000", prev: undefined, next: "001"}
console.log(obj.next()); // {value: "001", prev: "000", next: "002"}
console.log(obj.next()); // {value: "002", prev: "001", next: "009"}
console.log(obj.next()); // {value: "009", prev: "002", next: "010"}
console.log(obj.next()); // {value: "010", prev: "009", next: "011"}
console.log(obj.next()); // {value: "011", prev: "010", next: undefined}
console.log(obj.next()); // {value: undefined, prev: "011", next: undefined}








