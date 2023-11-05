const mongoose = require('mongoose');

// Define the schema for the user model
const changeavailabilitySchema = new mongoose.Schema({
    messageTypeId : String,
    connectorId : String,
    type: String,
  
});

// Create the Mongoose model for the changeavailibility
const changeavailability= mongoose.model('changeavailability', changeavailabilitySchema);

module.exports = changeavailability;
