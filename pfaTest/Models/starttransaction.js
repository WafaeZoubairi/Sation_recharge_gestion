const mongoose = require('mongoose');

// Define the schema for the user model
const starttransactionSchema = new mongoose.Schema({
  id: String,
  action: String,
  data: {
    messageTypeId: String,
    connectorId: Number,
    idTag: String,
    meterStart: Number,
    timeStamp: String,
    reservationId: Number,
    
  }

});

// Create the Mongoose model for the starttransaction
const starttransaction = mongoose.model('starttransaction',starttransactionSchema);

module.exports = starttransaction;
