var Animal = require('./animal');
class Elephant extends Animal {
    constructor(name, weight, energyLevel, trunkLength) {
        super(name, weight,energyLevel);
        this.trunkLength = trunkLength;
    }
}
module.exports = Elephant;