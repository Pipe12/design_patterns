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

const namesUpper = names.map((name) => name.toUpperCase());
console.log(namesUpper);
console.log(names);