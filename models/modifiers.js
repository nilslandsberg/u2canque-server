const mongoose = require('mongoose');

const modifierSchema = new mongoose.Schema({
  sides: [{ type: String }],
  bread: [{ type: String }]
});

const Modifier = mongoose.model('Modifier', modifierSchema);
module.exports = Modifier;
