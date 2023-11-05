const mongoose = require('mongoose');

// Define the schema for the user model
const heartbeatSchema = new mongoose.Schema({
  action: String,
  messageTypeId: String,
  currentTime: String,
  interval: String,
});

// Create the Mongoose model for the heartbeat
const heartbeat = mongoose.model('heartbeat', heartbeatSchema);

module.exports = heartbeat;
