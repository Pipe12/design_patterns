// Programación FUNCIONAL

// función primer orden
function sum(a,b){
    return a+b;
}

let res = sum(1,2);
console.log(res);

const fSum = sum;
res = fSum(5,6);
console.log(res);

// función orden superior
function operation(fn, a, b){
    console.log("se hace algo");
    console.log(fn(a,b));
}

operation(sum, 10,20);

// arrow function
operation((a,b)=>a*b, 5,5);
operation((a,b)=>{
    const c = a + b;
    return c * 2;
},1,2);

// foreach
const names = ["Héctor","Juan","Pablo"];
names.forEach((name)=>console.log(name));
names.forEach((name)=>console.log(name.toUpperCase()));
console.log(names);

// map
const namesUpper = names.map((name)=>name.toUpperCase());
console.log(namesUpper);
console.log(names);

// reduce
const numbers = [5,4,7,1,10];
const total = numbers.reduce((ac, number)=>ac + number, 0);
console.log(total);


// Programación ORIENTADA A OBJETOS
// clase
class Drink{
    constructor(name){
        this.name = name;
    }

    info(){
        return "la bebida es: " + this.name;
    }
}

// objetos con funciones
function Drink2(name){
    this.name = name;
    this.info = function(){
        return "la bebida es: " + this.name;
    }
}


const drink = new Drink("agua");
console.log(drink.info());

const drink2 = new Drink2("agua 2");
console.log(drink2.info());

// herencia
class Beer extends Drink{

    constructor(name, alcohol){
        super(name);
        this.alcohol = alcohol;
    }

    info(){
        return super.info() + " "+this.alcohol;
    }
}

const beer = new Beer("erdinger", 8.5);
console.log(beer.info());


