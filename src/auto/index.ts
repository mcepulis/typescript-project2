import { Dealer } from "./Dealer.js";

const bandis = new Dealer('Al Bundy', 'EUR');

console.log(bandis.getCar('Volvo', 15_000));
console.log(bandis.getCar('Vokswagen Passat', 20_000));
console.log(bandis.getCar('Toyota', 17_500));
console.log(bandis.getCar('Mazda', 10_500));

console.log(bandis.carList());

console.log(bandis.changeCarPrice(1, 17_300));
// New Volvo price is 17.300 EUR.
console.log(bandis.changeCarPrice(2, 19_500));
// New Vokswagen Passat price is 19.500 EUR.

console.log(bandis.carList());

console.log(bandis.sellCar(1));
console.log(bandis.sellCar(5));
console.log(bandis.sellCar(2));

console.log(bandis.fortune());

console.log(bandis.carList());

console.log(bandis.sellCar(1));

console.log(bandis.changeCarPrice(1, 15_000));

console.log(bandis.sellCar(1));

console.log(bandis.fortune());

console.log(bandis.carList());

console.log(bandis.sellCar(5));