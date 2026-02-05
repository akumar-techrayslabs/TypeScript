"use strict";
// function getChai(kind:string | number)
// {
//     if(typeof kind === 'string')
//     {
//         return `Making ${kind.toUpperCase()} chai...`
//     }
//     return `chai oder: ${kind}`
// }
Object.defineProperty(exports, "__esModule", { value: true });
const updateChai = (updates) => {
    console.log("updating chai with", updates);
};
updateChai({ price: 25 });
updateChai({ isHot: true });
updateChai({});
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "Masala chai",
    quantity: 2
});
const chaiInfo = {
    name: "Lemon Tea",
    price: 30
};
//# sourceMappingURL=typeNarrowing.js.map