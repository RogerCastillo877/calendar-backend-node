const { response } = require("express")
const Event = require('../models/Event');

const getEvents = ( req, res = response ) => {

  res.json({
    ok: true,
    msg: 'getEvents'
  });
};

const createEvent = async( req, res = response ) => {

  const event = new Event( req.body );

  try {

    event.user = req.uid;
    
    const eventSaved = await event.save();

    res.json({
      ok: true,
      msg: eventSaved
    })
  } catch (error) {
    console.log(error);
    res.status( 500 ).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }

};

const updateEvent = ( req, res = response) => {
  
  res.json({
    ok: true,
    msg: 'updateEvents'
  });
};

const deleteteEvent = ( req, res = response) => {

  res.json({
    ok: true,
    msg: 'deleteEvents'
  });
};

module.exports = { getEvents, createEvent, updateEvent, deleteteEvent };