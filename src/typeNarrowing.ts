// function getChai(kind:string | number)
// {
//     if(typeof kind === 'string')
//     {
//         return `Making ${kind.toUpperCase()} chai...`
//     }
//     return `chai oder: ${kind}`
// }

// function serveChai (msg?:string)
// {
//     if(msg)
//     {
//         return `Serving ${msg}`;
//     }
//     return `Serving default masala chai`;
// }


// function orderChai (size:"small" | "medium" |"large" |number){
//     if(size === "small")
//     {
//         return `small cutting chai...`
//     }
//     if(size === 'medium' || size ==='large')
//     {
//         return `make extra chai`
//     }
//     return `chai order #${size}`
// }


// class kulhadChai {

//     serve(){
//         return `Serving Kulhad chai`
//     }
// }

// class cutting{
//     serve(){
//         return `Serving cuttin chai`
//     }
// }


// function serve(chai:kulhadChai | cutting)
// {
//     if(chai instanceof kulhadChai)
//     {
//         return chai.serve();
//     }
// }

// console.log(serve(new kulhadChai()));



// type ChaiOrder = {
//     type: string
//     sugar: number
// }

// function isChaiOrder(obj:any):obj is ChaiOrder{
//     return (
//         typeof obj === 'object' && 
//         obj !== null && 
//         typeof obj.type === "string" && 
//         typeof obj.sugar === "number"
//     )
// }


// function serverOrder(item:ChaiOrder | string)
// {
//     if(isChaiOrder(item))
//     {
//         return `Serving ${item.type} chai with ${item.sugar} sugar`
//     }
//     return `Serving custom chai: ${item}`
// }



// type MasalaChai = {type:"masala"; spicelevel: number};
// type GingerChai = {type:"ginger"; amount:number};
// type ElaichiChai = {type:"elaichi"; aroma: number};


// type chai = MasalaChai | GingerChai | ElaichiChai


// function makeChai(order: chai)
// {
//     switch (order.type) {
//         case "masala":
//             return `Masala chai`
//             break;
//         case "elaichi":
//             return `Elaichi Chai`

//         case "ginger":
//             return `Ginger Chai`
      
//     }
// }


// function brew(order: MasalaChai | GingerChai)
// {
//     if("spicelevel" in order)
//     {
//         return `${order.spicelevel}`
//     }
// }


// //Forceful type Assertion 


// let response : any = "42";

// // let numbericLength: number = response.length; it will not give us suggestions as it is still treated as any we have to do forceful type assertion in this 

// let numbericLength: number = (response as string).length;


// type Book = {
//     name: string;
// };

// let bookString = `{"name":"who moved my cheese"}`;
// let bookObject = JSON.parse(bookString) as Book

// console.log(bookObject.name)


// const inputElement = document.getElementById("username") as HTMLInputElement

// let value:any

// value = "chai"
// value = [1,2,3]
// value = 2.5 
// value.toUpperCase()


// let newValue:unknown

// newValue = "chai"
// newValue = [1,2,3]
// newValue = 2.4
// // newValue.toUpperCase()

// if(typeof newValue === "string")
// {
//     newValue.toUpperCase();
// }


// try {
    
// } catch (error) {
//     if(error instanceof Error)
//     {
//         console.log("Error",error);
        
//     }
//     console.log("Error",error);
    
// }

// const data:unknown = "chai aur code"

// const strData: string = data as string


// type Role = "admin" | "user" | "superadmin"


// function redirectBasedOnRole(role:Role): void {
//     if(role === "admin")
//     {
//         console.log("Redirecting to admin dashboard");
//         return
        
//     }
//     if(role === "user")
//     {
//         console.log("Redirecting to user Dashboard");
//         return
        
//     }
//     role; 
//     //when we hover we can see the type never;
// }


// function neverReturn():never{
//     while(true){}
// }

// type ChaiOrder ={
//     type:string;
//     sugar:number;
//     strong:boolean;
// }
// function makeChai(order: ChaiOrder)
// {
//     console.log(order);
    
// }


// function serveChai(order:ChaiOrder)
// {
//     console.log(order);
    
// }

// type TeaRecipe = {
//     water: number;
//     milk: number;
// }

// interface TeaRecipe  {
//     water: number;
//     milk: number;
// }

// class MaslaChai implements TeaRecipe{
//     water = 100;
//     milk = 50;
// }



// type Cupsize = "small" | "large"

// interface Cupsize {
//     size:"small" | "large"
// }

// class Chai implements Cupsize{
//     size: "small" | "large" = "large";
// }

// type Response = {ok:true} | {ok: false}

// class myRes implements Response{
//     ok:boolean = true;
// }


// type TeaType = "masala" | "ginger" | "lemon"

// function orderChai(t:TeaType)
// {
//     console.log(t);
    
// }


// type BaseChai = {teaLeaves:number}
// type Extra = {masala:number}

// type MasalaChai = BaseChai & Extra


// const cup: MasalaChai = {
//     teaLeaves : 2,
//     masala: 5
// }


// type User = {
//     username: string;
//     bio?:string
// }

// const u1 : User = {username:"Hitesh"}
// const u2 : User = {username:"Hitesh",bio:"hitesh.ai"}

// type Config = {
//     readonly appName: string
//     version:number

// }

// const cfg : Config = {
//     appName : "Masterji",
//     version: 1
// }

// // cfg.appName = "chainame" will throw error 

// const chai = {
//     name: "Masala chai",
//     price: 20,
//     isHot : true
// }

// // TypeScript automatically infere these datatype

// let tea:{
//     name:string;
//     price:number;
//     isHot:boolean
// }

// tea = {
//     name:"Ginger Tea",
//     price: 25,
//     isHot:true
// }

// type Tea = {
//     name: string,
//     price: number,
//     ingredients: string[]
// }

// const adrakChai: Tea = {
//     name:"Adrak Chai",
//     price: 25,
//     ingredients:["ginger","tea leaves"]
// }


// type Cup = {size: string};

// let smallCup : Cup = {size:"200ml"}


// let bigCup = {size: "500ml",material:"steel"}

// smallCup = bigCup

// type Brew = {brewTime:number}
// const coffee = {brewTime:5,beans:"Arabica"}
// const chaiBrew : Brew = coffee


// type User = {
//     username: string;
//     password:string
// }


// const u: User = {
//     username: "chaicode",
//     password:"123"
// }

// type Item = {name: string,quantity:number}
// type Address = {street: string,pin:number}

// type Order = {
//     id:string;
//     items: Item[];
//     address: Address
// }


type Chai = {
    name:string;
    price:number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) =>{
    console.log("updating chai with",updates);
    
}

updateChai({price:25})
updateChai({isHot:true})
updateChai({})


type ChaiOrder = {
    name?:string;
    quantity?:number
}

const placeOrder  = (order:Required<ChaiOrder>) =>{
    console.log(order);
    
}

placeOrder({
    name: "Masala chai",
    quantity: 2
})


type Chai = {
    name:string;
    price:number;
    isHot: boolean;
    ingredients: string[]
}


type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}

type ChaiNew = {
    name:string;
    price: number;
    isHot: boolean;
    secretIngredients: string;

};

type PublicChai = Omit<Chai,"secretIngredients">
