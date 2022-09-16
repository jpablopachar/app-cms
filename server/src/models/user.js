const { Schema, model } = require('mongoose')

const UserSchema = Schema({
  name: String,
  lastName: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  role: String,
  active: Boolean,
  avatar: String
})

module.exports = model('User', UserSchema)
