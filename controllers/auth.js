const { response } = require( 'express' );

const createUser = ( req, res = response ) =>{

  const { name, email, password } = req.body;

  if( name.length < 5 ) {
    return res.status( 400 ).json({
      ok: false,
      msg: "El nombre debe ser de 5 letras"
    });
  };

  res.json( {
    ok: true,
    msg: 'register',
    name,
    email,
    password
  });
};

const loginUser = ( req, res = response ) => {

  const { name, email, password } = req.body;

  res.json({
    ok: true,
    msg: 'login',
    name,
    email,
    password
  });
};

const reValidateToken = ( req, res = responses ) => {

  res.json({
    ok: true,
    msg: 'renew'
  });
};


module.exports = { createUser, loginUser, reValidateToken }
