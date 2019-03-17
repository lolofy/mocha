const should = require('should');

var user = {
	name: 'tj',
	pets: ['tobi','loki','jame']
}

user.should.have.property('name', 'tj');

console.log('3')