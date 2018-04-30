var Animal = require('./animal');
var Mammals = require('./mammals');
class Lion extends Mammals {
    constructor(name, weight, bodyTemperature) {
        super(name, weight, bodyTemperature);
        this.foodAmount = 1000;
        
    }
}
module.exports = Lion;