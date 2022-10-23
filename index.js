const express = require('express');
require( 'dotenv' ).config();

// Express server creation
const app = express();

// Public File
app.use( express.static( 'public' ) );

// Routes
// app.get( '/', ( req, res ) => {

//   res.json({
//     ok: true
//   });
// });

// To listening requests
app.listen( process.env.PORT, () => {
  console.log(`Server running port: ${ process.env.PORT }`);
});