// Dependency
const greetings = require('./greets.json');

// Logic
const greet= () => console.log(greetings.english);

// Export the module
module.exports = greet;