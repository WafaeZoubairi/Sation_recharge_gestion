const mongoose = require('mongoose');

// Define the schema for the user model
const datatransferchema = new mongoose.Schema({
  id: String,
  action: String,
  data: {
  messageTypeId: String,
  vendorId: String,
  messageId: String,
  data: String,
  }
});

// Create the Mongoose model for the datatransfer
const datatransfer= mongoose.model('datatransfer', datatransferchema);

module.exports = datatransfer;
