Hello and welcome to my app's Back-End.

I built it using Node.js, Express,

and for my database I used MongoDB.

Thanks to this back-end, I can manage the data with CRUD actions like creating new data items like new users, new destinations to the recommendation list, updating

data items and deleting data items from the database.

Moreover, I use this back-end to authorize and authenticate users in my app.

to run the server, you must run the following commands in your terminal:

cd backend

npm i

pnpm watch

Now the server is running and the data will be rendered within the UI.

The project uses the following main dependencies:

Express.js: Web framework for Node.js.

Mongoose: MongoDB object modeling tool.

nodemon: A utility that monitors for changes in your Node.js application and automatically restarts the server when changes are detected. It helps streamline the development process by avoiding the need to manually restart the server after every code change.

dotenv: A zero-dependency module that loads environment variables from a .env file into process.env. It simplifies the management of environment-specific configurations and sensitive data (e.g., API keys, database credentials) in Node.js applications.

bcrypt: A library used for hashing passwords and comparing hashed passwords during authentication. It provides a secure way to store passwords by generating salted and hashed representations of user passwords.

cors: Cross-Origin Resource Sharing (CORS) middleware for Express.js. It enables secure cross-origin requests by allowing you to define which origins are allowed to access your server's resources.

joi: A powerful schema description language and data validator for JavaScript. It allows you to define schemas for data validation, including complex data structures, and validate input data against these schemas.

jsonwebtoken: A library for generating and verifying JSON Web Tokens (JWT) for implementing token-based authentication in Node.js applications. It provides a secure way to transmit claims between parties as JSON objects.

body-parser: A middleware for Express.js that extracts the entire body portion of an incoming request stream and exposes it on req.body. It parses incoming request bodies in various formats (e.g., JSON, URL-encoded) and makes the parsed data available in req.body.
