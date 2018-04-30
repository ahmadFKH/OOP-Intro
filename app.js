class Animal {
    constructor(name, weight, energyLevel) {
        this.name = name;
        this.weight = weight;
        this.energyLevel = energyLevel;
        this.foodAmount = 10; 

    }
    greet() {
        console.log("Hello, I'm " + this.name);
      }
    play() {
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
}
class Fish extends Animal {
    constructor(name, weight, energyLevel, foodAmount) {
        super(name, weight,energyLevel);
        this.foodAmount = 2;
    }
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
/*let billy = new Animal('Billy', 500,100);
let jeffrey = new Animal("Jeffrey", 100);
console.log("Hello " + billy.name);
console.log(billy.greet());
billy.play();
billy.eat();*/