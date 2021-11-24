# landingPage | MERN

A React  Full-stack app for showing landing page to register as a new user or sign in with some validation.

## Built using

#### Front-end

- [ReactJS](https://reactjs.org/) - Frontend framework
- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers) -SimpleSchema validates JavaScript objects to ensure they match a schema
- [react-hook-form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation.
- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start) - to route through the links 
- [fontawesom](https://fontawesome.com) - a svg library 
- [react-redux](https://react-redux.js.org) - Designed to work with React's component model. You define how to extract the values your component needs from Redux, and your component updates automatically as needed. 
- [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
- [yup](https://www.npmjs.com/package/yup) - Yup is a JavaScript schema builder for value parsing and validation.


#### Back-end

- [Node.js](https://nodejs.org/en/) - Runtime environment for JS
- [Express.js](https://expressjs.com/) - Node.js framework, makes process of building APIs easier & faster
- [MongoDB](https://www.mongodb.com/) - Database to store document-based data
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
- [Dotenv](https://www.npmjs.com/package/dotenv) - To load environment variables from a .env file
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
- [express-async-errors](https://www.npmjs.com/package/express-async-errors) - A dead simple ES6 async/await support hack for ExpressJS
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - An implementation of JSON Web Tokens
- [mongoose-unique-validator](https://www.npmjs.com/package/mongoose-unique-validator) - mongoose-unique-validator also validates the Model
- [joi](https://www.npmjs.com/package/joi) - The most powerful schema description language and data validator for JavaScript.


## Features
register as a new user or sign in and safe the user's token in the browser local storage to remember the user while refrshing the page and add the the auth throu token from the server side to the front End side 



## Usage


#### Env variable:

Create a config.env file in ../server/config directory and add the following:

```
MONGODB_URI = "Your Mongo URI"
PORT = 5000
NODE_ENV="development or production"

```


#### Client:


Open client/package.json & change "proxy" to a port that suite you in case you have changed the port in server side 

```
cd client
npm install
npm start
```
#### Server:

Note: Make sure that you have installed 'nodemon' as global package.

```
cd server
npm install
npm run dev
```
