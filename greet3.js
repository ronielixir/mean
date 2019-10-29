function Greetr() {
	this.greeting = 'function created as this variable and export as object';
	this.greet = function() {
		console.log(this.greeting);
	}
}

module.exports = new Greetr();