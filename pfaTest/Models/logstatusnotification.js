const mongoose = require('mongoose');

// Define the schema for the user model
const logstatusnotificationSchema = new mongoose.Schema({
    messageTypeId: String,
    status: String,
    requestId: String,
    errorCode: String,
    errorDescription: String,
    additionalInfo: {
}
});

// Create the Mongoose model for the logtatus
const logstatusnotification = mongoose.model('logstatusnotification', logstatusnotificationSchema);

module.exports =logstatusnotification;
