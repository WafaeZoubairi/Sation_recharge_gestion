const mongoose = require('mongoose');

// Define the schema for the user model
const statusnotificationSchema = new mongoose.Schema({
  id: String,
  action: String,
  data: {
    timestamp: String,
    status: String,
    errorCode: String,
    connectorId: String,
    messageTypeId: String,
   
  }
});

// Create the Mongoose model for the statusnotification
const statusnotification = mongoose.model('statusnotification', statusnotificationSchema);

module.exports = statusnotification;
