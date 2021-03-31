// 7.a

let arr = ["hello", 12, "Michael", true];

let [,,thirdElement] = arr;

console.log(thirdElement);

//------------------------------------------------------------

//7.b

let Organization = {
    name: 'Capgemini' , 
    address: {
        pincode: 10011,
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India'

    }
}

function retrievePincode(org){
    return org.address.pincode;
}

console.log(retrievePincode(Organization));     // this will return the pincode of the organization
