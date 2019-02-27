# Demo day project

This is my personal resume website written in JavaScript and CSS.

## Technology used

For this project, I used:

* React
  * I chose React because it looked a simpler. I think I was wrong. Getting babel and webpack set up took the longest chunk fo time.
  * I also used [react-router](https://reacttraining.com/react-router/web/guides/philosophy) and followed their tutorial [here](https://reacttraining.com/react-router/web/example/basic)
* [KeystoneJS](https://keystonejs.com/)
  * I saw KeystoneJS when I was looking for CMSs but I didn't know enough about JavaScript in order to use it. Keystone basically lets me create my own admin panel in code.
  * Apparently it's hard to use react with keystone, so I followed a tutorial: [this one](https://itnext.io/building-a-node-cms-with-keystonejs-mongo-db-react-and-redux-part-i-ae5958496df2)
* FontAwesome
* keystone uses mongodb, which is a javascript database

## Other helpful links

I used [this](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_timeline) to help with the resume timeline.

## Starting this project

First of all, install the dependencies.

```
npm install
```

To start this project, you need to have mongodb running.

Keystone docs provided this docker command:

```
docker run -p 27017:27017 mongo
```

If you're on Mac OS you need to have docker for mac installed.

Start the server:

```
npm start
```

Use webpack and create the client javascript:

```
npm run compile
```

Now go to `http://localhost:3000` and it should work.

## login

To log into the admin, go to http://localhost:3000/keystone and sign in as "neubeckshelby@gmail.com". The default password is "admin"
