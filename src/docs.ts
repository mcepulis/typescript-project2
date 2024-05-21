/*
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
*/

let name: string = 'Jonas';
const age: number = 99;
const isMarried: boolean = true;

let name2 = 'Jonas';
const age2 = 99;
const isMarried2 = true;

const marks: number[] = [10, 2];
const mixList: (string | number)[] = [10, 2, 'a', 'b'];

const listNumbers = [1, 2];
const listStrings = ['a', 'b'];
const listFixedPositions: [number, number, string, string] = [10, 2, 'a', 'b'];
const listNumbersOrStrings: number[] | string[] = ['a', 'b'];

const listNumbers2: Array<number> = [1, 2];
const listStrings2: Array<string> = ['a', 'b'];
const listmix2: Array<string | number> = ['a', 'b', 5];

let notSure;
notSure = true;
notSure = 'asd';

function sum(a: number, b: number): string {
    if (a > 5) {
        return 'Daugiau';
    }
    if (b < 5) {
        return 'Maziau';
    }
    if (a === 5 && b === 5) {
        return `${a} ir ${b} kabejo palubej`;
    }
    return '' + (a + b);
}

function connectStrings(a: string, b: string) {
    return a + b;
}

sum(7, 5);
sum('asd', 5);
sum('5456', 5);

function gautiDuomenu() {
    return [1, 2, 3];
}

function gautiDuomenu2(): number[] {
    return [1, 2, 3];
}

function gautiDuomenu3(): Array<number> {
    return [1, 2, 3];
}

async function gautiDuomenu4(): Promise<number[]> {
    return [1, 2, 3];
}

async function gautiDuomenu5(): Promise<Array<number>> {
    return [1, 2, 3];
}

async function random(): Promise<string> {
    // Youtube: event loop
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Daugiau');
            } else {
                reject('Ne daugiau');
            }
        }, 2000);
    });
}

console.log('Random: start');

try {
    const a = await random();
    console.log('Random:', a);
} catch (error) {
    console.log('Random:', error);
}