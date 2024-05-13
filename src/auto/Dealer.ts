export class Dealer {
    public currency: string;

    constructor(name: string, currency: string) {
        this.currency = currency;
        console.log(`Hi, my nameee is ${name}!`);
    }

    formatedPrice(price: number) {
        let formattedPrice = price.toString();
        if (formattedPrice.length > 3) {
            formattedPrice = formattedPrice.slice(0, formattedPrice.length - 3) + '.' + formattedPrice.slice(formattedPrice.length - 3);
        }
        return formattedPrice + ' ' + this.currency;
    }
    
    

    getCar(model: string, price: number) {
        return `New car everyone! ${model} for only ${this.formatedPrice(price)}!`;
    }
}
