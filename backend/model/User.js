const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let Student = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  gender: {
    type: String
  },
  dob: {
    type: Date
  }
}, {
  collection: 'users'
})

module.exports = mongoose.model('User', User)