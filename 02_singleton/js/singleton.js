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

// const singletonInstance = new Singleton();
// const singletonInstanceTwo = new Singleton();
// const singletonInstanceThree = Singleton.getInstance();
// console.log(singletonInstance.random);
// console.log(singletonInstanceTwo.random);
// console.log(singletonInstanceThree.random);
// console.log(singletonInstance === singletonInstanceTwo);
// console.log(singletonInstanceThree === singletonInstanceTwo);

class WeekDays {
  daysEs = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
  ]

  daysEn = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  constructor(lang) {
    this.lang = lang;

    if (WeekDays.instance) {
      return WeekDays.instance
    }

    WeekDays.instance = this;
  }
  
  getDays() {
    return this.lang === 'es'
      ? this.daysEs
      : this.daysEn
  }
}

const weekDays = new WeekDays('en')
const weekDays2 = new WeekDays('es')
console.log(weekDays.getDays())
console.log(weekDays2.getDays())
