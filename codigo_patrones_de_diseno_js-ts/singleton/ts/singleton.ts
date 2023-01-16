class SingletonTS{
    private static instance: SingletonTS;
    public random: number;

    private constructor(){
        this.random = Math.random();
    }

    public static getInstance(): SingletonTS{
        if(!this.instance){
            
            this.instance = new SingletonTS();
        }

        return this.instance;
    }
}

const singleton1 = SingletonTS.getInstance();
console.log(singleton1.random);
const singleton2 = SingletonTS.getInstance();
console.log(singleton2.random);
singleton1.random = 7;
console.log(singleton1.random);
console.log(singleton2.random);

console.log(singleton1 === singleton2);
