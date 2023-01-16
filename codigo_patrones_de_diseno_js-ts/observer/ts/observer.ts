interface IObserver<T>{
    refresh(value: T): void;
}

interface ISubject<T>{
    observers: IObserver<T>[];

    subscribe(observer: IObserver<T>): void;
    unsubscribe(observer: IObserver<T>): void;
    notify(value: T): void;
}

class Subject<T> implements ISubject<T>{

    observers: IObserver<T>[];

    constructor(){
        this.observers = [];
    }

    subscribe(observer: IObserver<T>){
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserver<T>){
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(value: T){
        this.observers.forEach(e=>{
            e.refresh(value);
        });
    }

}

class Observer<T> implements IObserver<T>{
    
    private fn: (value: T) => void;

    constructor(fn: (value: T) => void){
        this.fn = fn
    }

    refresh(value: T){
        this.fn(value);
    }
}

const subject = new Subject<number>();
const obs1 = new Observer<number>((n)=>{
    console.log(`hi ${n}`);
});
const obs2 = new Observer<number>((n)=>{
    console.log(`Hello ${n}`);
});

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.notify(1.2);


const subjectString = new Subject<string>();
const obs1String = new Observer<string>((n)=>{
    console.log(`${n.toUpperCase()}`);
});
const obs2String = new Observer<string>((n)=>{
    console.log(`${n.toLocaleLowerCase()}`);
});

subjectString.subscribe(obs1String);
subjectString.subscribe(obs2String);
subjectString.notify("Héctor");
subjectString.notify("Juan");


