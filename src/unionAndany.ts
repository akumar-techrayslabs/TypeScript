let sub: number | string = '1M'

let apiRequestStatus: 'Pending' | 'success' | 'error' = 'Pending'

let airlineSeat: 'aisle' |'window' | 'middle' = 'aisle'

airlineSeat = 'middle'

const orders = ['12','20','28' , '42']

// let currentOrder; it is also take any datatype if we will not annote it 


// let currentOrder:any; if we write this then we specify we don't care any datatype value  you can assinged to it 


let currentOrder:string | undefined;

for(let order of orders)
{
    if(order === '28')
    {
        currentOrder = order
        break
    }
}

// currentOrder = 42 it will give us error now
console.log(currentOrder);
