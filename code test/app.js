// Dependency
const greet = require('./greet');
const greet1 = require('./greet1');
const greet2 = require('./greet2').greet;
const greet3 = require('./greet3');
const greet3b = require('./greet3');
const Greet4 = require('./greet4');
const greet5 = require('./greet5').greet;
//const Emitter = require('./emitter');
const Emitter = require('events');
const eventConfig = require('./config').events;


// Invoking greet from module greet
greet.english();
greet.sunda();

console.log('---------------------------------');
console.log('module pattern availability');
console.log('---------------------------------');

// Invoke function expression from export
greet1();

//invoke object that already define in export
greet2();

// invoke created object from export
greet3.greet();
greet3.greeting = 'Changed hello world!';
greet3b.greet();

// create new object from export
const grtr = new Greet4();
grtr.greet();

// Revealing module pattern
greet5();

// Emitter
const emtr = new Emitter();

emtr.on(eventConfig.GREET, () => console.log('somewhere....'));
emtr.on(eventConfig.GREET, () => console.log('....somehow'));

console.log('Hi');
emtr.emit(eventConfig.GREET);

const buf = new Buffer.from('Hello', 'utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());

const buffer = new ArrayBuffer(8); //byte
const view = new Int32Array(buffer); //bit
view[0] = 5;
view[1] = 15;
view[2] = 30;
console.log(view);

var http = require('http');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');

}).listen(1337, '127.0.0.1');