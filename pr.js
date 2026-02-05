// console.table(a,b,c);
// var a = 5;
// let b = 6;
// const c = 8;

let str = "https://www.anish%20.com";

let ptr = str.replace("%20", "-");
// console.log(ptr);

let str1 = "Anish-Kumar-prasad-Techrayslabs-office-intern-2026";
// console.log(str1.split('-',3));

const emptyString = "";

// string is empty and separator is non-empty
// console.log(emptyString.split("a"));
// // [""]

// // string and separator are both empty strings
// console.log(emptyString.split(emptyString));
// // []

// console.log(Math.max.apply(null,arr2));
// console.log(Math.max(...arr2));

const obj = { ..."hello", ..."test" };
// console.log(obj);

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString('en-in'));

const myDats = new Date();

// console.log(myDats.toLocaleString('default',{
//     weekday:"long",

// }));
const arr2 = [1, 2, 3, 3, 4, 5, 5, 6, 7, 5];
const myarr3 = arr2.splice(1, 3, 97, 98, 99, 100);
// console.log(myarr3);
// console.log("updated arr2",arr2);

// console.log(Array.from({name:"Anish"}));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
fruits.reverse();
// console.log(fruits);


let a = {
    name: "Anis",
    age:22,
    hobby:{
        one:"cricket",
        two:"football"
    }
}

// console.log(a.hobby.one);



const arr2e = [1, 2, 3];

const sumWithInitial = arr2e.reduce((accumulator,currentvalue)=>{
    // console.log("accumulator",accumulator);
    // console.log("currentvalue",currentvalue);
    
    return accumulator+currentvalue
},0)

// console.log(sumWithInitial);


const fruitss = ["Banana", "Orange", "Apple", "Mango"];
const f = fruitss.entries();


for( let i of f)
{
    // console.log(i+"\n");
    
}
// console.log(f);


const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj3 = {5:"a",6:"b"};

const obj4 = Object.assign(obj1,obj2,obj3);

// console.log(obj4);
// console.log(obj1);


const obj5 = Object.entries(obj1,obj2,obj3);
// console.log(obj5);


function anish()
{
    // console.log("Anish Kumar Prasad");
    // console.log("Anish Kumar Prasad");
    // console.log("Anish Kumar Prasad");
    // console.log("Anish Kumar Prasad");
    
}

let ak = anish;
// console.log(ak);


if(true)
{
    const username = "anish"
    if(username === "anish")
    {
        const website = "youtube";
        // console.log(username + " " + website);
        
    }
    // console.log(website);
    
}

console.log(this);

function abchgf()
{
    console.log("abchgf",this);
    
}
abchgf()

const ar3r3 = () => {
    // let username = "anihs"
    console.log(this);
    return 7;
}

console.log(ar3r3());


const addTwo = (a,b)=> (a+b)
const addTwoobject = (a,b)=> ({username:"anish"})
console.log(addTwo(65,5))
console.log(addTwoobject())

console.log("typeof",typeof  "anish");


(function chai (){
    console.log("DB connected");
    
})();

((name)=>{console.log( `DB Connected 32 ${name}`);
})("Anish")


val1 = null ?? 10;
console.log(val1);
val1 = undefined ?? 23??10
console.log(val1)


const anisharr = [1,2,3,4,5,6,7,8,9];

 anisharr.map((element)=>console.log(element));


 const letters = new Set(["a","b","c"]);

// Create an Iterator
const myIterator = letters.values();
console.log(myIterator);

const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

// const C = A.union(B);  will not work in node.js as it is a new addition



let objg = {
    fname:"Anish",
    lname:"Kumar"
}
let mySet = new WeakSet();
mySet.add(objg);

let answer = mySet.has(objg);
console.log(answer);

console.log(mySet);

const fruitsss = new Map([
  ["apples" ,  500],
  ["bananas" ,   300],
  ["oranges" ,  200]
]);

let numb = fruitsss.get("apples");
console.log(numb);
const fruits2 = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to select low volumes 
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by ok and low
const result = Map.groupBy(fruits2, myCallback);
console.log(result);


function User(username,loginCount,isLoggedIn)
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // return this;

}

// const userOne = User("hitesh",32,true)
// const userTwo = User("Anish",72,false)
const userOne = new User("hitesh",32,true);
const userTwo = new User("Anish",72,false)
console.log(userOne);
console.log(userTwo);


if(true){
     a5435543w = 4;
    
}
console.log(typeof a);


