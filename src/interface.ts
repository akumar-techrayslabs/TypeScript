interface chai{
    flavour:string;
    price: number;
    milk?:boolean;
}


const masala: chai = {
    flavour:"anihs",
    price:33,

}

interface Shop{
    readonly id:number
    name:string
}

const s: Shop = {id:1,name:"Chaicode coffe"}

interface DiscountCalculator{
    (price:number):number
}

const apply50: DiscountCalculator = (p) => p*0.5


interface TeaMachine{
    start():void;
    stop():void
}

const machine: TeaMachine = {
    start(){
        console.log("start");
        
    },
    stop(){
        console.log("stop");
        
    }
}

// interface ChaiRatings {
//     [flavor: string] : number
// }

// class reatings implements ChaiRatings {
//     masala:4.5,
//     ginger:4.5,
// }

interface ChaiRatings {
  [key: string]: number;
}


const ratings: ChaiRatings = {
    masala:65,
    ginger:44
}

interface User {
    name:string
}

interface User {
    age:number
}

const u: User = {
    name:"Hitesh",
    age:42
}

interface A {a:string}
interface B {b:string}

interface C extends A,B {
   
}