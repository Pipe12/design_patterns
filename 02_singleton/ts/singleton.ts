class SinglentonTS {
  private static instance: SinglentonTS;
  public random: number;

  private constructor() {
    this.random = Math.random();
  }

  public static getInstance(): SinglentonTS {
    if(!this.instance) {
      this.instance = new SinglentonTS;
    }

    return this.instance;
  }
}

const singleton = SinglentonTS.getInstance();
const singleton2 = SinglentonTS.getInstance();
console.log(singleton.random);
console.log(singleton2.random);
