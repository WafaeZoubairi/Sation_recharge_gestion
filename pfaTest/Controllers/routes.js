const express= require ('express');
const route= express.Router();
// MeterValues
route.post('/meter-values', async (req, res) => {
    console.log(`Received MeterValues request from ${req.body.identity}:`, req.body.params);
  
    // Store the meter values data in MongoDB
    const meterValuesData = {
      identity: req.body.identity,
      timestamp: new Date(),
      values: req.body.params.meterValue,
    };
    const meterValues = new MeterValues(meterValuesData);
    await meterValues.save();
  
    // Send response to the charging station
    res.send({
      status: 'Accepted',
    });
  });
  
  // StatusNotification
  route.post('/status-notification', async (req, res) => {
    console.log(`Received StatusNotification request from ${req.body.identity}:`, req.body.params);
  
    // Store the status notification data in MongoDB
    const statusNotificationData = {
      identity: req.body.identity,
      timestamp: new Date(),
      status: req.body.params.status,
    };
    const statusNotification = new StatusNotification(statusNotificationData);
    await statusNotification.save();
  
    // Send response to the charging station
    res.send({
      status: 'Accepted',
    });
  });
  
  // DataTransfer
  route.post('/data-transfer', async (req, res) => {
    console.log(`Received DataTransfer request from ${req.body.identity}:`, req.body.params);
  
    // Store the data transfer data in MongoDB
    const dataTransferData = {
      identity: req.body.identity,
      timestamp: new Date(),
      vendorId: req.body.params.vendorId,
      messageId: req.body.params.messageId,
      data: req.body.params.data,
    };
    const dataTransfer = new DataTransfer(dataTransferData);
    await dataTransfer.save();
  
    // Send response to the charging station
    res.send({
      status: 'Accepted',
    });
  });
  
  // Start the server
  module.exports=route;

  
