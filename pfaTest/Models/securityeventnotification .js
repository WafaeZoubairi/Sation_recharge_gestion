const mongoose = require('mongoose');

// Define the schema for the user model
const securityeventnotificationschema = new mongoose.Schema({
  id: String,
  action: String,
  data: {
  messageTypeId: String,
  timestamp: String,
  eventId: String,
  eventType: String,
  parentEventId: String,
  }
});

// Create the Mongoose model for the securityeventnotification
const securityeventnotification= mongoose.model('securityeventnotification', securityeventnotificationschema);

module.exports = securityeventnotification;
