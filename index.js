require('dotenv').config();

//import keystone
var keystone = require('keystone');

// Set up our keystone instance
keystone.init({
  // The name of the KeystoneJS application
  'name': 'Shelby Neubeck',
  // Paths to our application static files
  'static': [
    './server/public/js/',
    './server/public/css/',
    './server/public/img/',
  ],
	'emails': 'templates/emails',
	'view engine': 'pug',
  // Keystone includes an updates framework,
  // which you can enable by setting the auto update option to true.
  // Updates provide an easy way to seed your database,
  // transition data when your models change,
  // or run transformation scripts against your database.
  'auto update': true,
  // The url for your MongoDB connection
  'mongo': 'mongodb://localhost/keystone',
  // Whether to enable built-in authentication for Keystone's Admin UI,
  'auth': true,
  // The key of the Keystone List for users, required if auth is set to true
  'user model': 'User',
  // The encryption key to use for your cookies.
  'cookie secret': '6D61822FBEAED8635A4A52241FEC3',
});

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Models
keystone.import('./server/models');
keystone.set('routes', require('./server/routes'));

// Start Keystone to connect to your database and initialise the web server
if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
	console.log('----------------------------------------'
	+ '\nWARNING: MISSING MAILGUN CREDENTIALS'
	+ '\n----------------------------------------'
	+ '\nYou have opted into email sending but have not provided'
	+ '\nmailgun credentials. Attempts to send will fail.'
	+ '\n\nCreate a mailgun account and add the credentials to the .env file to'
	+ '\nset up your mailgun integration');
}

// Start Keystone
keystone.start();
