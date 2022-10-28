const { response } = require("express")

const getEvents = ( req, res = response ) => {

  res.json({
    ok: true,
    msg: 'getEvents'
  });
};

const createEvent = ( req, res = response ) => {
  
  res.json({
    ok: true,
    msg: 'createEvents'
  });
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
}

module.exports = { getEvents, createEvent, updateEvent, deleteteEvent };