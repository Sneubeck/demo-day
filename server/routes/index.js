var keystone = require('keystone');
// Then to get access to our API route we will use importer
var importRoutes = keystone.importer(__dirname);
// And finally set up the api on a route
var routes = {
  api: importRoutes('./api'),
};;

const renderFrontend =  () => {
      return `
		<!doctype html>
		<html>
			<head>
				<title>Shelby Neubeck</title>
        <link rel="stylesheet" href="main.css"></link>
        <link rel="stylesheet" href="resume.css"></link>
        <link rel="stylesheet" href="contact.css"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
			</head>
      <body>
        <div class="react-container">
          <!-- This is where React will put the generated HTML -->
        </div>
				<script src="bundle.js"></script>
			</body>
		</html>
		`;
}

const httpRenderFrontend = (req, res) => {
    res.send(renderFrontend());
};

// Export our app routes
exports = module.exports = function (app) {
    // Get access to the API route in our app
    app.get('/api/resume/', keystone.middleware.api, routes.api.resume.get);
    // Set up the default app route to  http://localhost:3000/index.html
    app.get('*', httpRenderFrontend);
};
