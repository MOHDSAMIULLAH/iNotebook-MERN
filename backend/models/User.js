// import mongoose from 'mongoose';
// const { Schema } = mongoose;
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    defaul: Date.now
  }

});

// const User = mongoose.model('user', UserSchema);
// User.createIndexes();
// module.exports = User
// User.create({
//   name: req.body.name,
//   email: req.body.email,
//   password: req.body.password,
// }).then(user => res.json(user));
module.exports = mongoose.model('user',UserSchema);