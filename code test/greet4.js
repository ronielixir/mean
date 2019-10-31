function Greetr() {
	this.greeting = 'function created as this variable but object not created';
	this.greet = function() {
		console.log(this.greeting);
	}
}

module.exports = Greetr;