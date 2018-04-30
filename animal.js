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
    mate(animal) {
        if (this.constructor.name === animal.constructor.name) {
            let baby = new this.constructor("Baby" + this.constructor.name);
            console.log(baby.name);
        }
        else {
            console.log("Not successful");
        }

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
module.exports = Animal;