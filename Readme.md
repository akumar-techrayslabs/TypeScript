# To install TypeScript 

npm init 

npm i -D typescript 

# To Initialize a TypeScript Project

npx tsc --init


# How to run a typescript file 

npx tsc  filename 

node src/filename in js

# Type Inferencing 
for already defined datatypes in Javascript 
if we will not annotate the types still Ts will not give any error and this is called Inferencing in Typescript where the script implicitly understands the datatype of the variable for eg.

```javascript
let drink = "chai"
```

// it will not give us any error, but if we reassigned its value to other types then it will show as the error
drink = 807;

Type 'number' is not assignable to type 'string'.ts(2322)
```javascript
let drink: string = "chai"
```


 --> It is called annotation in TypeScript where we explictly defined the datatype of a variable 


# Union datatype 

## In union datatype we can defined a specific no of types for a variable 

```javascript
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


```

