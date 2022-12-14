# calendar-backend-node

## Create APP with node
To create __package.json__
```
npm init -y
```

## Watch mode in node
```
npm i nodemon -g
to start watch mode
nodemon fileName.js
```

## Add in __package.json__
```
"scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js"
},
```
## Add express
```
npm i express
```
## create a express server
```
const express = require('express');

const app = express();
const port = 4000;

app.get( '/', ( req, res ) => {
  res.json({
    ok: true
  });
});

app.listen( port, () => {
  console.log(`Server running ${ port }`);
});
```

 ## Create a __public__ file
 Add __index.html__ and __styles.css__
 set public folder as a main directory
 ```
 app.use( express.static( 'public' ) );
 ```

 ## Create a environment variables
create file __.env__
```
PORT=4000
```
And add npm pack
```
npm i dotenv
```
Add in __index.js__
```
require( 'dotenv' ).config();
```

## To config routes file
Create folder routes with file __auht.js__
```
const { Router } = require('express');
const router = Router();

router.get( '/', ( req, res ) => {

  res.json({
    ok: true
  });
});

module.exports = router;
```
Set __index.js__
```
app.use( '/api/auth', require( './routes/auth' ) );
```

## Express validators
```
npm i express-validator
```
Add validation in request
```
[
  check( 'name', 'El nombre es obligatorio' ).not().isEmpty()
],
```

## Install mongoose
```
npm i mongoose
```

## To encrypt password
```
npm i bcryptjs
```

## Install JWT
```
npm i jsonwebtoken
```

## Install CORS
```
npm i cors
```

## Deploy in Railway [https://railway.app/]
