const { Schema, model } = require("mongoose");


const userSchema = ({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
});

module.exports = model.apply('User', userSchema);
