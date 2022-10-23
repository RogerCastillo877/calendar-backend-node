/*
  User Toutes / Auth
  host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { createUser, loginUser, reValidateToken } = require('../controllers/auth');

router.post(
  '/',
  [
    check( 'name', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'email', 'El email es obligatorio' ).not().isEmail(),
    check( 'password', 'El password debe ser de 6 caracteres' ).isLength({ min: 6 }),
  ],
  createUser );

router.post(
  '/login',
  [
    check( 'email', 'El email es obligatorio' ).not().isEmail(),
    check( 'password', 'El password debe ser de 6 caracteres' ).isLength({ min: 6 }),
  ],
  loginUser );

router.get( '/renew', reValidateToken );

module.exports = router;