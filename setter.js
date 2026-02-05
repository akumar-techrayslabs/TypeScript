class chai {
 

    constructor(price,flavour)
    {
        this.price = price
        this.flavour = flavour;
    }

    set flavour(flavour)
    {
        this._flavour = flavour
    }
    get flavour()
    {
        return this._flavour;
    }
    set price(price)
    {
        this._price = price
    }
    get price()
    {
        return this._price;
    }
}

let tea = new chai(786,"masala");

console.log(tea.flavour);

console.log("1" !== 1);