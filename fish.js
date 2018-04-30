var Animal = require('./animal');
class Fish extends Animal {
    constructor(name, weight) {
        super(name, weight);
    }
    get weight() {
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
module.exports = Fish;