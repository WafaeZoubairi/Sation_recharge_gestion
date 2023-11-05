const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const {connectToMongoDB} =require('../mongodb');
const authorize=require('../Models/authorize')
const bootnotification=require('../Models/bootnotification')
const changeavailibility=require('../Models/changeavailibility')
const changeconfiguration=require('../Models/changeconfiguration')
const datatransfer=require('../Models/datatransfer')
const endtransaction=require('../Models/endtransaction')
const firmwarestatusnotification=require('../Models/firmwarestatusnotification')
const heartbeat=require('../Models/heartbeat')
const logstatusnotification=require('../Models/logstatusnotification')
const metervalues=require('../Models/metervalues')
const securityeventnotification =require('../Models/securityeventnotification ')
const starttransaction=require('../Models/starttransaction')
const statusnotification=require('../Models/statusnotification')

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;
/*****
 ?  *mongo connection
 *   */
let cms=()=>{
 connectToMongoDB();
  /** */
  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);
    /**
     *!BootNotification Handler
     */
    /**
     *!BootNotification Listener
     */
    socket.on('BootNotification', async (data) => {
      console.log(`Received BootNotification from ${socket.id}`, data);
      let BootNotification=new bootnotification(data);
           await BootNotification.save();

     /**
     *!BootNotification Responder
     */
      socket.emit('BootNotification', {
        status: 'Accepted',
        currentTime: new Date().toISOString(),
        interval: 300,
      });
    });
    /**
     *!Authorize Handler
     */
    /**
     *!Authorize Listener
     */
    socket.on('Authorize', async (data) => {
      console.log(`Received Authorize from ${socket.id}`, data);
      // Store data in MongoDB
      let Authorize=new authorize(data);
      await Authorize.save();
      /**
     *!Authorize Responder
     */
      socket.emit('Authorize', {
        idTagInfo: {
          status: 'Accepted',
          expiryDate: new Date().toISOString(),
          parentIdTag: 'ABC123',
        },
      });
    });
    /**
     *!StartTransaction Handler
     */
    /**
     *!StartTransaction  Listener
     */
    socket.on('StartTransaction', async (data) => {
        console.log(`Received StartTransaction from ${socket.id}`, data);
        // Store data in MongoDB
        let StartTransaction=new starttransaction(data);
        await StartTransaction.save();
     /**
     *!StartTransaction Responder
     */
        socket.emit('StartTransaction', {
          idTagInfo: {
            status: 'Accepted',
            expiryDate: new Date().toISOString(),
            parentIdTag: 'ABC123',
          },
        });
      });

    /**
     *!Meter Values Handler
     */
    /**
     *!Meter Values Listener
     */
    socket.on('MeterValues', async (data) => {
      console.log(`Received MeterValues from ${socket.id}`, data);
      // Store data in MongoDB
      let MeterValues=new metervalues(data);
           await MeterValues.save();
      /**
     *!Meter Values Responder
     */
      socket.emit('MeterValues', {});
    });
    /**
     *!StatusNotififcation Handler
     */
    /**
     *!StatusNotififcation Listener
     */
    socket.on('StatusNotification', async (data) => {
      console.log(`Received StatusNotification from ${socket.id}`, data);
     let Statusnotification= new statusnotification(data);
     await Statusnotification.save();
     /**
     *!StatusNotififcation Responder
     */
      socket.emit('StatusNotification', {

      });
    });
  
})   
server.listen(3000, () => {
    console.log(`Server listening on port ${3000}`);
  }); 

}
module.exports={cms};