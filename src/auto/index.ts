import { Dealer } from "./Dealer.js";

const bandis = new Dealer('Al Bundy', 'EUR');

console.log(bandis.getCar('Volvo', 15000));
console.log(bandis.getCar('Vokswagen Passat', 20000));
console.log(bandis.getCar('Toyota', 17500));
console.log(bandis.getCar('Mazda', 10500));