/*
  User Toutes / Auth
  host + /api/auth
*/

const { Router } = require('express');
const router = Router();

const { createUser, loginUser, reValidateToken } = require('../controllers/auth');

router.post( '/', createUser );

router.post( '/login', loginUser );

router.get( '/renew', reValidateToken );

module.exports = router;