var sub = '1M';
var apiRequestStatus = 'Pending';
var airlineSeat = 'aisle';
airlineSeat = 'middle';
var orders = ['12', '20', '28', '42'];
var currentOrder; // if we write this then we specify we don't care any datatype value  you can assinged to it 
for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
    var order = orders_1[_i];
    if (order === '28') {
        currentOrder = order;
        break;
    }
}
currentOrder = 42;
console.log(currentOrder);
