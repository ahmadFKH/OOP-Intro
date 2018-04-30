var Animal = require('./animal');
class Mammals extends Animal {
    constructor(name, weight, bodyTemperature) {
        super(name, weight);
        this.bodyTemperature = 35;
    }
}
module.exports = Mammals;
