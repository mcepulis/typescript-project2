"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dealer = void 0;
class Dealer {
    currency;
    constructor(name, currency) {
        this.currency = currency;
        console.log(`Hi, my nameee is ${name}!`);
    }
    formatedPrice(price) {
        let formattedPrice = price.toString();
        if (formattedPrice.length > 3) {
            formattedPrice = formattedPrice.slice(0, formattedPrice.length - 3) + '.' + formattedPrice.slice(formattedPrice.length - 3);
        }
        return formattedPrice + ' ' + this.currency;
    }
    getCar(model, price) {
        return `New car everyone! ${model} for only ${this.formatedPrice(price)}!`;
    }
}
exports.Dealer = Dealer;
