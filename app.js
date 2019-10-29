// Dependency
const greet = require('./greet');
const greet1 = require('./greet1');
const greet2 = require('./greet2').greet;
const greet3 = require('./greet3');
const greet3b = require('./greet3');
const Greet4 = require('./greet4');
const greet5 = require('./greet5').greet;


// Invoking greet from module greet
greet.english();
greet.sunda();

console.log('---------------------------------');
console.log('module pattern avaliability');
console.log('---------------------------------');

// Invoke function expression from export
greet1();

//invoke object that already define in export
greet2();

// invoke created object fron export
greet3.greet();
greet3.greeting = 'Changed hello world!';
greet3b.greet();

// create new object from export
const grtr = new Greet4();
grtr.greet();

// Revealing module pattern
greet5();