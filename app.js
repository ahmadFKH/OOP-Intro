var Animal = require('./animal');
var Eelephant = require('./elephant');
var Lion = require('./lion');
var Fish = require('./fish');
var Mammals = require('./mammals');

let thomas = new Lion("Thomas", 3000,10000);
let billy = new Fish('Billy', 50);
let david = new Fish('david' , 40);
console.log(billy.constructor.name);
billy.mate(thomas);
