const mongoose = require('mongoose');

// Define the schema for the user model
const changeconfigurationSchema = new mongoose.Schema({
  id: String,
  action: String,
  data: {
    key: String,
    value: Number,
  
  }
});

// Create the Mongoose model for the changeconfiguration
const changeconfiguration = mongoose.model('changeconfiguration', changeconfigurationSchema);

module.exports = changeconfiguration;
