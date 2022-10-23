const { response } = require( 'express' );

const createUser = ( req, res = response ) =>{

  res.json( {
    ok: true,
    msg: 'register'
  });
};

const loginUser = ( req, res = response ) => {

  res.json({
    ok: true,
    msg: 'login'
  });
};

const reValidateToken = ( req, res = responses ) => {

  res.json({
    ok: true,
    msg: 'renew'
  });
};


module.exports = { createUser, loginUser, reValidateToken }