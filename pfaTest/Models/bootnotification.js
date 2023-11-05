const mongoose = require('mongoose');

// Define the schema for the user model
const bootnotificationSchema = new mongoose.Schema({
  id: String,
  action: String,
  data: {
    meterSerialNumber: String,
    meterType: String,
    imsi: String,
    iccid: String,
    firmwareVersion:String,
    areVersion: String,
    chargePointSerialNumber: String,
    chargeBoxSerialNumber: String,
    chargePointModel: String,
    chargePointVendor: String,
    chargePointModel: String,
    
  }
});

// Create the Mongoose model for the bootnotification
const bootnotification = mongoose.model('bootnotification', bootnotificationSchema);

module.exports =bootnotification;
