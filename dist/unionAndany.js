"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sub = '1M';
let apiRequestStatus = 'Pending';
let airlineSeat = 'aisle';
airlineSeat = 'middle';
const orders = ['12', '20', '28', '42'];
// let currentOrder; it is also take any datatype if we will not annote it 
// let currentOrder:any; if we write this then we specify we don't care any datatype value  you can assinged to it 
let currentOrder;
for (let order of orders) {
    if (order === '28') {
        currentOrder = order;
        break;
    }
    else {
        currentOrder = "11";
    }
}
// currentOrder = 42 it will give us error now
console.log(currentOrder);
//# sourceMappingURL=unionAndany.js.map