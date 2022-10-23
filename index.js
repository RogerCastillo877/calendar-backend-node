const express = require('express');
require( 'dotenv' ).config();
const { dbConnection } = require('./database/config');

// Express server creation
const app = express();

// DataBase
dbConnection();

// Public File
app.use( express.static( 'public' ) );

// Read and parse information from body
app.use( express.json() );

// Routes
app.use( '/api/auth', require( './routes/auth' ) );

// To listening requests
app.listen( process.env.PORT, () => {
  console.log(`Server running port: ${ process.env.PORT }`);
});