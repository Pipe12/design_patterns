console.log('Singleton in js');

class Singleton {

  static getInstance() {
    return Singleton.instance;
  }

  constructor() {
    this.random = Math.random();
    if(Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
  }
}

const singletonInstance = new Singleton();
const singletonInstanceTwo = new Singleton();
const singletonInstanceThree = Singleton.getInstance();
console.log(singletonInstance.random);
console.log(singletonInstanceTwo.random);
console.log(singletonInstanceThree.random);
console.log(singletonInstance === singletonInstanceTwo);
console.log(singletonInstanceThree === singletonInstanceTwo);
