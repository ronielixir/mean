const obj = {
	name: 'John Doe',
	greet: function() {
		console.log(`Hello ${ this.name }`);
	}
}

obj.greet();
obj.greet.call({ name: 'Jane Doe'});
obj.greet.apply({ name: 'Jane Doe'});

// call and apply set this keyword reference
// if called function has param:
// call pass param with literals
// apply pass param with array