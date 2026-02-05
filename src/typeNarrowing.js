function getChai(kind) {
    if (typeof kind === 'string') {
        return "Making ".concat(kind.toUpperCase(), " chai...");
    }
    return "chai oder: ".concat(kind);
}
function serveChai(msg) {
    if (msg) {
        return "Serving ".concat(msg);
    }
    return "Serving default masala chai";
}
function orderChai(size) {
    if (size === "small") {
        return "small cutting chai...";
    }
    if (size === 'medium' || size === 'large') {
        return "make extra chai";
    }
    return "chai order #".concat(size);
}
var kulhadChai = /** @class */ (function () {
    function kulhadChai() {
    }
    kulhadChai.prototype.serve = function () {
        return "Serving Kulhad chai";
    };
    return kulhadChai;
}());
var cutting = /** @class */ (function () {
    function cutting() {
    }
    cutting.prototype.serve = function () {
        return "Serving cuttin chai";
    };
    return cutting;
}());
function serve(chai) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
}
console.log(serve(new kulhadChai()));
function isChaiOrder(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serverOrder(item) {
    if (isChaiOrder(item)) {
        return "Serving ".concat(item.type, " chai with ").concat(item.sugar, " sugar");
    }
    return "Serving custom chai: ".concat(item);
}
function makeChai(order) {
    switch (order.type) {
        case "masala":
            return "Masala chai";
            break;
        case "elaichi":
            return "Elaichi Chai";
        case "ginger":
            return "Ginger Chai";
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        return "".concat(order.spicelevel);
    }
}
//Forceful type Assertion 
var response = "42";
// let numbericLength: number = response.length; it will not give us suggestions as it is still treated as any we have to do forceful type assertion in this 
var numbericLength = response.length;
var bookString = "{\"name\":\"who moved my cheese\"}";
var bookObject = JSON.parse(bookString);
console.log(bookObject.name);
