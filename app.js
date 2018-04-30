class Animal {
    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName.length > 2) {
            this._name = newName;
        }
       
        else {
            console.log("Error: provided name must be 2 characters or longer");
        }
    }
    get weight() {
        return this._weight;
    }

    set weight(newWeight) {
        if (newWeight > 0) {
            this._weight = newWeight;
        }
       
        else {
            console.log("Error: provided weight must be above zero");
        }
    }
    constructor(name, weight) {
        this._name = name;
        this._weight = weight;
    }

    greet() {
        console.log("Hello, I'm " + this.name);
    }
}
    /*play() {
        this.energyLevel -= 50; 
        console.log("Now my energy level = " + this.energyLevel);
        return;
    }
    eat() {
        this.energyLevel += this.foodAmount; 
        console.log("Now my energy level = " + this.energyLevel);
        return;
    }
}
class Elephant extends Animal {
    constructor(name, weight, energyLevel, trunkLength) {
        super(name, weight,energyLevel);
        this.trunkLength = trunkLength;
    }
}*/
class Fish extends Animal {
    constructor(name, weight) {
        super(name, weight);
    }
    get weight() {
        debugger;
        console.log("ANIMAL_NAME weight accessed");
        return this._weight;
    }
    set weight(newWeight) {
        if (newWeight <= 100) {
            this._weight = newWeight;
        }  
        else {
            console.log("Error: provided weight must be below 100");
        }
}
}
/*
    play() {
        this.energyLevel -= 5; 
        console.log("Now my energy level = " + this.energyLevel);
        return;
    }
    eat() {
        this.energyLevel += this.foodAmount; 
        console.log("Now my energy level = " + this.energyLevel);
        return;
    }
}
class Mammals extends Animal {
    constructor(name, weight, bodyTemperature) {
        super(name, weight);
        this.bodyTemperature = 35;
    }
}
class Lion extends Mammals {
    constructor(name, weight, bodyTemperature) {
        super(name, weight, bodyTemperature);
        this.foodAmount = 1000;
        
    }
}

let thomas = new Lion("Thomas", 3000,10000);
console.log(thomas);
let billy = new Animal('Billy', 500,100);
let jeffrey = new Animal("Jeffrey", 100);
console.log("Hello " + billy.name);
console.log(billy.greet());
billy.play();
billy.eat();*/
let billy = new Fish('Billy', 500);
console.log("Hello " + billy.name);
billy.name = 'ah';
billy.weight = 101;