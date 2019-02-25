var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function (done) {
	new User.model({
		name: { first: 'admin', last: 'user' },
		email: 'neubeckshelby@gmail.com',
		password: 'admin',
		isAdmin: true,
	}).save(done);
};
