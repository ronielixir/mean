// Dependency
const greetings = require('./greets.json');

// Logic
const greet = () => console.log(greetings.sunda);

// Export the module
module.exports = greet;