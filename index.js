const express = require('express');
require( 'dotenv' ).config();
const cors = require('cors')
const { dbConnection } = require('./database/config');

// Express server creation
const app = express();

// DataBase
dbConnection();

// CORS
app.use(cors());

// Public File
app.use( express.static( 'public' ) );

// Read and parse information from body
app.use( express.json() );

// Routes
app.use( '/api/auth', require( './routes/auth' ) );
app.use( '/api/events', require( './routes/events' ) );

// To listening requests
app.listen( process.env.PORT, () => {
  console.log(`Server running port: ${ process.env.PORT }`);
});