const mongoose = require('mongoose')

const drinkSchema = new mongoose.Schema({
  name: { type: String, require: true },
  alcoholic: { type: Boolean, require: true},
  color: { type: String, require: true }
})

module.exports = mongoose.model('Drink', drinkSchema)
