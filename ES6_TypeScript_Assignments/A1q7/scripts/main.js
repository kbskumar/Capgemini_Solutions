"use strict";
// 7.a
var arr = ["hello", 12, "Michael", true];
var thirdElement = arr[2];
console.log(thirdElement);
//------------------------------------------------------------
//7.b
var Organization = {
    name: 'Capgemini',
    address: {
        pincode: 10011,
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India'
    }
};
function retrievePincode(org) {
    return org.address.pincode;
}
console.log(retrievePincode(Organization)); // this will return the pincode of the organization
//# sourceMappingURL=main.js.map