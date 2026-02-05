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


class Cup{
    readonly capacity: number = 250 

    constructor(capacity:number)
    {
        this.capacity = capacity
    }
}

const cup = new Cup(345);
console.log(cup.capacity)
// cup.capacity = 567

class ModernChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value:number)
    {
        if(value > 5) throw new Error("Too sweet")
            this._sugar = value
    }
}

const c = new ModernChai()
c.sugar = 3


class EkChai {
    static shopName = "Chai or copde"

    constructor(public flavour: string){}

}
console.log(EkChai.shopName)

abstract class Drink{
    abstract make():void 
}


class MyChai extends Drink{
    make(): void {
        console.log("Brewing Chai");
        
    }
}


class Heater {
  
    heat(name:string){
       
        
    }
}

class chaiMaker{
    constructor(private heater:Heater){}

    make(){
        //  this.heater.heat("anish");
         this.heater.heat("abhu gytrh ytre")

        
        
    }
}


