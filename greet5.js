var greeting = 'this is global variable from module';

function greet() {
	console.log(greeting);
}

module.exports = {
	greet: greet
}