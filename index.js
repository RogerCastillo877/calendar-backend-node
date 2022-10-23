const express = require('express');
require( 'dotenv' ).config();

// Express server creation
const app = express();

// Public File
app.use( express.static( 'public' ) );

// Routes
app.use( '/api/auth', require( './routes/auth' ) );

// Read and parse information from body
app.use( express.json() );

// To listening requests
app.listen( process.env.PORT, () => {
  console.log(`Server running port: ${ process.env.PORT }`);
});