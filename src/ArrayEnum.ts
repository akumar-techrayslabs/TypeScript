const chaiFlavours : string[] = ["Masala","Adrak"];
const chaiPrice: number[] = [10,20];

const rating: Array<number> = [4.5,5.0];


type Chai = {
    name:string;
    price: number
}

const menu: Chai[] = [

    {name: "Masala",price:1},{name:"Elaichi",price:23}
]


const cities: readonly string[] = ["Delhi","Jaipur"]

// cities.push("Pune");


const table: number[][] = [
    [1,2,3],
    [4,5,6]
]


// Tuples

let chaiTuple: [string,number];
chaiTuple = ["Masala",20]
// chaiTuple = [20,"masala"] order is important in tuples 


let userInfo: [string,number,boolean?]
userInfo = ["hitesh",100]
userInfo = ["hitesh",100,true]


// readonly tuples 

const location: readonly [number,number] = [28.66,32.33]


// named tuple

const chaiItems: [name:string,price:number] = ["Masala",25]


enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE
const size3 = CupSize.MEDIUM


enum Status {
    PENDING  = 100,
    SERVED, // BY DEFUALT ITS VALUE WILL GET INCREMENTED AND BECOME 101
    CANCELLED // 102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType)
{
    console.log(`Making: ${type}`);
    
}

makeChai(ChaiType.GINGER)
// makeChai("masala") // will throw error as in enum we can select only those values which are present in the enum


enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}


let t: [string,number] = ["chai",10];
t.push("extra")