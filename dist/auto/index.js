"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dealer_js_1 = require("./Dealer.js");
const bandis = new Dealer_js_1.Dealer('Al Bundy', 'EUR');
console.log(bandis.getCar('Volvo', 15000));
console.log(bandis.getCar('Vokswagen Passat', 20000));
console.log(bandis.getCar('Toyota', 17500));
console.log(bandis.getCar('Mazda', 10500));
