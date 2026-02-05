// class chai {
//     flavour: string;
//     price:number
//     constructor(flavour:string, price:number){
//         this.flavour = flavour;
//         this.price = price
//         console.log(this);
//     }
//     prepare()
//     {
//         console.log();
//     }
// }
// const masalaChai = new chai("Ginger",20)
// masalaChai.flavour = "masala"
// masalaChai.price = 33
// class chai {
//     public flavor: string = "Masala"
//     private secretIngredients = "Cardamom"
//     reveal(){
//         return this.secretIngredients
//     }
// }
// class Shop{
//     protected shopName = "Anish Shop"
// }
// class Branch extends Shop{
//     getName()
//     {
//         return this.shopName
//     }
// }
// class Walet {
//     #balance = 100 // we can also declare private like this 
//     getBalance(){
//         return this.#balance
//     }
// }
// const w = new Walet().getBalance()
// console.log(w);
// const c = new chai()
// c.reveal()
var Cup = /** @class */ (function () {
    function Cup(capacity) {
        this.capacity = 250;
        this.capacity = capacity;
    }
    return Cup;
}());
var cup = new Cup(345);
console.log(cup.capacity);
