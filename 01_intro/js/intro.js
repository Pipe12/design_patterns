function addition(a, b) {
  return a + b;
}

let total = addition(5, 7);
console.log(total);

const fAddition = addition;
total = fAddition(20, 20);
console.log(total);

// Funciones de orden superior son funciones que puede recibir como parametros otras funciones.
function operation(fn, a, b) {
  console.log('Inside operation');
  console.log(fn(a, b));
}

operation(addition, 12, 12);
operation(fAddition, 50,50);

// forEach 
let names = ['Sara', 'Andres', 'Yaya', 'Abuela Vicky'];

names.forEach((name) => { console.log(name) });
names.forEach((name) => { console.log(name.toUpperCase()) });
console.log(names);
names.sort();
console.log(names);

// map
const namesUpper = names.map((name) => name.toUpperCase());
console.log(namesUpper);
console.log(names);

const numbers = [5, 4, 7, 1, 10];
const numbersTotal = numbers.reduce((acc, number) => acc + number, 0)

console.log(numbersTotal);

// Orient Object Programing 
// Class
class Drink {

  constructor(name) {
    this.name = name
  }

  info() {
    return `The drink is ${this.name}`;
  }

}

// Functional way
function Drink2 (name) {
  this.name = name;
  this.info = () => `The drink is ${this.name}` 
}

const water = new Drink('Water');
console.log(water.info());

const coke = new Drink2('Coke');
console.log(coke.info());


