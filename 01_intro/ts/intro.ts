console.log('Hello from ts');

class DrinkTwo {

  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  info(): string {
    return this.name;
  }
}

const waterTwo = new DrinkTwo('water');
console.log(waterTwo.info());

interface Product {
  price: number,
  getPrice(): string,
}

// Inheritance
class Beer extends DrinkTwo implements Product{

  private alcohol: number; price: number;

  constructor(name: string, alcohol: number, price: number) {
    super(name);
    this.alcohol = alcohol;
    this.price = price;
  }

  info() {
    return `This beer is ${this.name} and has ${this.alcohol}% of alcohol`;
  }

  getPrice(): string {
    return `$ ${this.price}`
  }
}

class Snack implements Product {

  private name: string; price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): string {
    return `Price $ ${this.price}`
  }
}

const corona = new Beer('Corona',  4.5, 9000);
console.log(corona.info());

const papas = new Snack('papitas', 4500);
console.log(papas.getPrice());

const products: Product[]= [
  new Beer('Poker', 4.5, 2000), 
  new Snack('Tostacos', 1300),
  new Beer('Club Colombia', 5.0, 2500)
];

function getPrices(items: Product[]) {
  for(const item of items) {
    console.log(item.getPrice());
  }
}

getPrices(products);
