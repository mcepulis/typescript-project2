type Car = {
    model: string,
    price: number,
};

export class Dealer {
    public name: string;
    public currency: string;
    public allCars: Car[];
    public soldCars: Car[];

    constructor(name: string, currency: string) {
        this.currency = currency;
        this.name = name;
        this.allCars = [];
        this.soldCars = [];
        console.log(`Hi, my name is ${name}!`);
    }

    formatedPrice(price: number) {
        return price.toLocaleString('de-DE', {
            style: 'currency',
            currency: this.currency
        });
    }

    getCar(model: string, price: number) {
        this.allCars.push({ model, price });
        return `New car everyone! ${model} for only ${this.formatedPrice(price)}!`;
    }

    carList() {
        let result = [`${this.name}\'s car dealership:`];

        if (this.allCars.length === 0) {
            result.push('SORRY! No cars for sale :(');
        }

        for (let i = 0; i < this.allCars.length; i++) {
            const car = this.allCars[i];
            const price = this.formatedPrice(car.price);
            const ending = i < this.allCars.length - 1 ? ';' : '.';
            result.push(`${i + 1}) ${car.model}: ${price}${ending}`);
        }

        const count = Math.max(...result.map(row => row.length));
        result.splice(1, 0, '='.repeat(count));

        return result.join('\r\n');
    }

    changeCarPrice(index: number, newPrice: number) {
        if (index < 1) {
            return 'ERROR: index is too low.';
        }
        if (index > this.allCars.length) {
            return 'ERROR: index is too big.';
        }

        const car = this.allCars[index - 1];
        car.price = newPrice;
        return `New ${car.model} price is ${this.formatedPrice(newPrice)}.`;
    }

    sellCar(index: number) {
        if (index < 1 || index > this.allCars.length) {
            return 'SORRY! There is no such car for sale :(';
        }

        const car = this.allCars.splice(index - 1, 1);
        this.soldCars.push(car[0]);
        return `Wow! ${car[0].model} sold for ${this.formatedPrice(car[0].price)}!`;
    }

    fortune() {
        const total = this.soldCars.reduce((t, c) => t + c.price, 0);
        return `${this.name} has sold ${this.soldCars.length} cars for total of ${this.formatedPrice(total)}!`;
    }
}
