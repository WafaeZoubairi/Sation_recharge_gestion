const mongoose = require('mongoose');

// Define the schema for the user model
const authorizeSchema = new mongoose.Schema({
  action: String,
  messageTypeId: String,
  idTag: String,
  chargePointVendor: String,
  chargePointModel: String,
  chargePointSerialNumber: String,
  meterSerialNumber: String,
  firmwareVersion: String,
  iccid: String,
  meterType: String,
});

// Create the Mongoose model for the autorize
const authorize = mongoose.model('authorize', authorizeSchema);

module.exports = authorize;
