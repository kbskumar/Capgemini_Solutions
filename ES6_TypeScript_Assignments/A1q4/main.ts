var arr = ["Tom", "Jerry", "Oggy"];

function convertArray(array){
let l = array.length;
let array2 = [];
for(let element of array){
    let obj = {
        name: element,
        length: element.length
    }
    array2.push(obj); 
}
return array2;
}

console.log(convertArray(arr)); // this will return an array [{name: "Tom", length: 3} {name: "Jerry", length: 5} {name: "Oggy", length: 4}].
