const mongoose = require('mongoose');
const endtransactionSchema = new mongoose.Schema({
    id: String,
    action: String,
    data: {
  messageTypeId: String,
  connectorId: String,
  transactionId:String,
  meterStop: String,
  idTag: String,
  reason: String,
  transactionData: [],
      
    }
  });
  
  // Create the Mongoose model for the endtransaction
  const endtransaction= mongoose.model('endtransaction',endtransactionSchema);
  
  module.exports = endtransaction;
