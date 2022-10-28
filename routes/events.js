/*
  Event Routes
  /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { fieldsValidator } = require('../middlewares/fields-validator');
const { validateJWT } = require('../middlewares/validate-jws');
const { getEvents, createEvent, updateEvent, deleteteEvent } = require('../controllers/events');

const router = Router();

router.use( validateJWT );

router.get( '/', getEvents );

router.post(
  '/', 
  [
    check( 'title', 'Titulo es obligatorio' ).not().isEmpty(),
    check( 'start', 'Fecha inicio es obligatorio' ).custom( isDate ),
    check( 'end', 'Fecha de fin es obligatorio' ).custom( isDate ),
    fieldsValidator
  ],
  createEvent
);

router.put( '/:id', updateEvent );

router.delete( '/:id', deleteteEvent );

module.exports = router;