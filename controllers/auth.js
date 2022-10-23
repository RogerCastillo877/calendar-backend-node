const { response } = require( 'express' );
const User = require('../models/User');

const createUser = async( req, res = response ) =>{

  const { name, email, password } = req.body;
  
  try {
    
    const User = new User( req.body )
  
    await User.save();
  
    res.status( 201 ).json( {
      ok: true,
      msg: 'register',
      name,
      email,
      password
    });
  } catch (error) {
    res.status( 500 ).json({
      ok: false,
      msg: 'Por favor contacte al administrador'
    });
  }
};

const loginUser = ( req, res = response ) => {

  const { name, email, password } = req.body;
  
  res.status( 201 ).json({
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
