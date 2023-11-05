const mongoose = require('mongoose');

// Define the schema for the user model
const firmwarestatusnotificationSchema = new mongoose.Schema({
    messageTypeId: String,
    status: String,
    requestId: String,
    errorCode:String,
    errorDescription: String,
    vendorId: String,
    firmwareVersion: String,
  }
  );
// Create the Mongoose model for the  firmwarestatusnotification
const firmwarestatusnotification= mongoose.model('firmwarestatusnotification', firmwarestatusnotificationSchema);

module.exports = firmwarestatusnotification;
