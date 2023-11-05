const mongoose = require('mongoose');
const metervaluesSchema = new mongoose.Schema({
    
        
          timestamp:  String,
          sampledValue: 
            {
              value: String,
              unit: String,
              measurand: String,
            },
        
    
      connectorId: Number,
         });
  
  // Create the Mongoose model for the endtransaction
  const metervalues= mongoose.model('metervalues',metervaluesSchema);
  
  module.exports = metervalues;
