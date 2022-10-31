const { response } = require("express")
const Event = require('../models/Event');

const getEvents = async( req, res = response ) => {

  const events = await Event.find()
                            .populate('user', 'name')
  res.json({
    ok: true,
    events
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

const updateEvent = async( req, res = response) => {

  const eventId = req.params.id;
  
  try {

    const event = await Event.findById( eventId );
    const uid = req.uid;

    if( !event ) {
      res.status( 404 ).json({
        ok: false,
        msg: "No existe por ese id"
      })
    };

    if( event.user.toString() !== uid ) {
       return res.status( 401 ).json({
        ok: false,
        msg: "No tiene privilegio de editar el evento"
      });
    };

    const newEvent = {
      ...req.body,
      user: uid
    };

    const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );

    res.json({
      ok: true,
      event: updatedEvent
    })
    
  } catch (error) {
    console.log(error);
    res.status( 500 ).json({
      ok: false,
      msg: "Contacte al administrador"
    });  
  }
};

const deleteteEvent = ( req, res = response) => {

  res.json({
    ok: true,
    msg: 'deleteEvents'
  });
};

module.exports = { getEvents, createEvent, updateEvent, deleteteEvent };