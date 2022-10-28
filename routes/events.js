/*
  Event Routes
  /api/events
*/

const { Router } = require('express');
const { getEvents, createEvent, updateEvent, deleteteEvent } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-jws');

const router = Router();
router.use( validateJWT );

router.get( '/', getEvents );

router.post( '/', createEvent );

router.put( '/:id', updateEvent );

router.delete( '/:id', deleteteEvent );

module.exports = router;