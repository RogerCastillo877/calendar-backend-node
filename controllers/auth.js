const { response } = require( 'express' );
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const createUser = async( req, res = response ) =>{

  const { email, password } = req.body;
  
  try {
    
    let user = await User.findOne({ email })

    if( user ) {
      return res.status.apply( 400 ).json({
        ok: false,
        msg: 'Usuario ya existe'
      });
    };

    user = new User( req.body );

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync( password, salt );
  
    await user.save();
  
    res.status( 201 ).json( {
      ok: true,
      msg: 'register',
      uid: email,
      name: user.name
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
