
const io = require('socket.io-client');

// Connect to the server
const socket = io('http://localhost:3000');

/** 
 * *Send a BootNotification request
*/
/**2----------------------------------------------------------------------------------------****** */
let bootNotification=(obj)=>{
  socket.emit('BootNotification', {
    id: obj.id,
   action: 'BootNotification',
   data: {
     chargePointVendor: obj.chargePointVendor,
     chargePointModel:obj.chargePointModel,
     chargePointSerialNumber:obj.chargePointSerialNumber,
     firmwareVersion:obj.firmwareVersion, 
     meterType:obj.meterType,
     imsi:obj.imsi,
     iccid:obj.iccid,
     chargeBoxSerialNumber:obj.chargeBoxSerialNumber
    }
 }
 
 ); 

}
/*
 * *Listen for the response to the BootNotification request
*/
socket.on('BootNotification', (response) => {
  console.log('BootNotification response:', response);
}); 

/** 
 * *Send a SecurityEventNotification request
 */
let SecurityEventNotification=(obj)=>
{socket.emit('SecurityEventNotification', {
  id:"13",
  action: 'SecurityEventNotification',
  data: {
  messageTypeId:obj.messageTypeId,
  timestamp:obj.timestamp,
  eventId:obj.eventId,
  eventType:obj.eventType,
  parentEventId:obj.parentEventId
  }
}); }

/*
 * * *Listen for the response to the SecurityEventNotification request
*/

socket.on('SecurityEventNotification', (response) => {
  console.log('SecurityEventNotification response:', response);
}); 


/* 
 **Send a StatusNotification request
*/
/*** 2------------------------------------------------------------------------------------------ */
let StatusNotification=(obj)=>
{ socket.emit('StatusNotification', {
  action: 'StatusNotification',
  data: {
    messageTypeId:obj.messageTypeId,
  connectorId:obj.connectorId,
  errorCode:obj.errorCode,
  status:obj.status,
  timestamp:obj.timestamp
  } 
})}
;   
/*
 * *Listen for the response to the StatusNotification request
*/
 socket.on('StatusNotification', (response) => {
  console.log('StatusNotification response:', response);
});
/* 
* *Send a HeartBeat request
*/
let heartBeat=(obj)=>{
  console.log("heartbeat")
  socket.emit('HeartBeat', {
  action: 'Heartbeat',
  messageTypeId:obj.messageTypeId,
  currentTime:obj.currentTime,
  interval:obj.interval
}); 
}


/*
* *Listen for the response to the HeartBeat request
*/

socket.on('HeartBeat', (response) => {
  console.log('HeartBeat response:', response);
});


/** 
* *Send a Authorize request
*/
let authorize=(obj)=>{
  socket.emit('Authorize', {
  action: 'Authorize',
  messageTypeId:obj.messageTypeId,
  idTag:obj.idTag,
  chargePointVendor:obj.chargePointVendor,
  chargePointModel:obj.chargePointModel,
  chargePointSerialNumber:obj.chargePointSerialNumber,
  firmwareVersion:obj.firmwareVersion,
  iccid:obj.iccid,
  meterType:obj.meterType
}); 
}


/*
 * *Listen for the response to the Authorize request
*/

socket.on('ocpp', (response) => {
  console.log('Authorize response:', response);
}); 


/** 
* *Send a StartTransaction request
*/
let startTransaction=(obj)=>{
  socket.emit('StartTransaction', {
  action: 'StartTransaction',
  messageTypeId:obj.messageTypeId,
  connectorId:obj.connectorId,
  idTag:obj.idTag,
  meterStart:obj.meterStart,
  reservationId:obj.reservationId,
});
}
 

/** 
**Listen for the response to the StartTransaction request
*/
//Listen for the response to the StartTransaction request

socket.on('StartTransaction', (response) => {
  console.log('StartTransaction response:', response);
});




/** 
* *Send a EndTransaction request
*/
let endTransaction=(obj)=>{
socket.emit('endTransaction', {
  action: 'endTransaction',
  messageTypeId:obj.messageTypeId,
  connectorId:obj.connectorId,
  transactionId:obj.transactionId,
  meterStop:obj.meterStop,
  idTag:obj.idTag,
  reason:obj.reason,
  transactionData:obj.transactionData
})
}


/** 
**Listen for the response to the EndTransaction request
*/
// Listen for the response to the EndTransaction request

socket.on('EndTransaction', (response) => {
  console.log('EndTransaction response:', response);
});

 
/** 
* *Send a MeterValues request
*/
let MeterValues=(obj)=>{
  socket.emit('MeterValues', {
    id:obj.id,
    action: 'MeterValues',
    payload: {
      connectorId:obj.connectorId,
      transactionId:obj.transactionId,
      values: [
        {
            measurand:obj.measurand,
            unit:obj.unit,
            value:obj.value
        },
        {
            measurand: obj.measurand,
            unit:obj.unit,
            value:obj.value
        }
    ],
    timestamp:obj.timestamp,
    sampledValue:obj.sampledValue
    }
  }); 
}
 
/** 
**Listen for the response to the MeterValues request
*/
 socket.on('MeterValues', (response) => {
  console.log('MeterValues response:', response);
}); 


 
/** 
* *Send a DataTransfer request
*/
let dataTransfer=(obj)=>{
  socket.emit('DataTransfer', {
  action: 'DataTransfer',
  messageTypeId:obj.messageTypeId,
  vendorId:obj.vendorId,
  messageId:obj.messageId,
  data:obj.data,
}); 
}


/** 
**Listen for the response to the DataTransfer request 
*/

 socket.on('DataTransfer', (response) => {
  console.log('DataTransfer response:', response);
}); 


/** 
* *Send a StatusNotification request
*/
let statusNotification=(obj)=>{
   socket.emit('StatusNotification', {
  action: 'StatusNotification',
   messageTypeId:obj.messageTypeId,
  connectorId:obj.connectorId,
  errorCode:obj.errorCode,
  status:obj.status,
  timestamp: obj.timestamp
});
} 
/** 
**Listen for the response to the StatusNotification request
*/
 socket.on('StatusNotification', (response) => {
  console.log('StatusNotification response:', response);
});
/** 
* *Send a FirmwareStatusNotification request
*/
let firmwareStatusNotification=(obj)=>{
   socket.emit('FirmwareStatusNotification', {
  action: 'FirmwareStatusNotification',
  messageTypeId:obj.messageTypeId,
  status:obj.status,
  requestId:obj.requestId,
  errorCode:obj.errorCode,
  errorDescription:obj.errorDescription,
  additionalInfo: {
    vendorId:obj.vendorId,
    firmwareVersion:obj.firmwareVersion
} });
}
 

/** 
**Listen for the response to the FirmwareStatusNotification request
*/
  socket.on('FirmwareStatusNotification', (response) => {
  console.log('FirmwareStatusNotification response:', response);
}); 
/** 
* *Send a  changeavailability request
*/
let changeavailability=(obj)=>{
  socket.emit('changeavailability', {
  action: 'changeavailability',
  messageTypeId:obj.messageTypeId,
  connectorId:obj.connectorId,
  type:obj.type,
});
}
/** 
**Listen for the response to the changeavailability request
*/
  socket.on('changeavailability', (response) => {
  console.log('changeavailability response:', response);
}); 

/** 
* *Send a  changeconfiguration request
*/
let changeconfiguration=(obj)=>{
  socket.emit('changeconfiguration', {
    messageTypeId:obj.messageTypeId,
    key:obj.key,
    value:obj.value,
  });
}


/** 
* *Listen for the response to the changeconfiguration request 
*/
socket.on('changeconfiguration', (response) => {
  console.log('changeconfigu ration response:', response);
});


/* let obj={
  "messageTypeId": "3",
  "connectorId": "1",
  "idTag": "ABCD1234",
  "meterStart": "1000",
  "reservationId": "1"
}
startTransaction(obj); */












































































































/* const io = require('socket.io-client');

// Connect to the server
const socket = io('http://localhost:3000');

/** 
 * *Send a BootNotification request
*/
/**2----------------------------------------------------------------------------------------****** */
/* socket.emit('BootNotification', {
   id: "13",
  action: 'BootNotification',
  data: {
    chargePointVendor: 'MyVendor',
    chargePointModel: 'MyModel',
    chargePointSerialNumber: '1234',
    firmwareVersion: '1.0', 
    meterType: 'MyMeterType',
    imsi:"hfhuf",
    iccid:"nfhf",
    chargeBoxSerialNumber: "hj" 
   }
}

);  */

/*
 * *Listen for the response to the BootNotification request
*/
/* socket.on('BootNotification', (response) => {
  console.log('BootNotification response:', response);
}); 
*/
/** 
 * *Send a SecurityEventNotification request
 */
/* 
socket.emit('SecurityEventNotification', {
  id:"13",
  action: 'SecurityEventNotification',
  data: {
  messageTypeId: "20",
  timestamp: "2022-04-29T00:00:00Z",
  eventId: "1",
  eventType: "Violation",
  parentEventId: "2"
  }
}); 
*/
/*
 * * *Listen for the response to the SecurityEventNotification request
*/
/* 
socket.on('SecurityEventNotification', (response) => {
  console.log('SecurityEventNotification response:', response);
}); 
*/

/* 
 **Send a StatusNotification request
*/
/*** 2------------------------------------------------------------------------------------------ */
 /* socket.emit('StatusNotification', {
  action: 'StatusNotification',
  payload: {
    messageTypeId: "5",
  connectorId: "1",
  errorCode: "NoError",
  status: "Available",
  timestamp: "2022-04-29T00:00:00Z"
  } 
})
;   */ 
/*
 * *Listen for the response to the StatusNotification request
*/
/*  socket.on('StatusNotification', (response) => {
  console.log('StatusNotification response:', response);
}); */
/* 
* *Send a HeartBeat request
*/
/*
socket.emit('HeartBeat', {
  action: 'Heartbeat',
  "messageTypeId": "12",
  "currentTime": "2022-04-29T00:00:00Z",
  "interval": "300"
}); 
*/
/*
* *Listen for the response to the HeartBeat request
*/
/* 
socket.on('HeartBeat', (response) => {
  console.log('HeartBeat response:', response);
});
 */

/** 
* *Send a Authorize request
*/
/* 
socket.emit('Authorize', {
  action: 'Authorize',
  "messageTypeId": "2",
  "idTag": "ABCD1234",
  "chargePointVendor": "vendor1",
  "chargePointModel": "model1",
  "chargePointSerialNumber": "1234",
  "meterSerialNumber": "5678",
  "firmwareVersion": "v1.0",
  "iccid": "iccid1234",
  "meterType": "model2"
  }
}); 
*/
/*
 * *Listen for the response to the Authorize request
*/
/* 
socket.on('ocpp', (response) => {
  console.log('Authorize response:', response);
}); 
*/

/** 
* *Send a StartTransaction request
*/
/* 
socket.emit('StartTransaction', {
  action: 'StartTransaction',
  "messageTypeId": "3",
  "connectorId": "1",
  "idTag": "ABCD1234",
  "meterStart": "1000",
  "reservationId": "1"
  }
}); 
*/
/** 
**Listen for the response to the StartTransaction request
*/
//Listen for the response to the StartTransaction request
/* 
socket.on('StartTransaction', (response) => {
  console.log('StartTransaction response:', response);
});
 */



/** 
* *Send a EndTransaction request
*/
/* 
socket.emit('endTransaction', {
  action: 'endTransaction',
  "messageTypeId": "4",
  "connectorId": "1",
  "transactionId": "100",
  "meterStop": "2000",
  "idTag": "ABCD1234",
  "reason": "Local",
  "transactionData": []
})

; 
*/
/** 
**Listen for the response to the EndTransaction request
*/
// Listen for the response to the EndTransaction request
/* 
socket.on('EndTransaction', (response) => {
  console.log('EndTransaction response:', response);
});
 */
 
/** 
* *Send a MeterValues request
*/
/** 
socket.emit('MeterValues', {
  "id": "1234",
  action: 'MeterValues',
  payload: {
    connectorId: 1,
    transactionId: 1,
    "values": [
      {
          "measurand": "Energy.Active.Import.Register",
          "unit": "Wh",
          "value": 12345
      },
      {
          "measurand": "Energy.Reactive.Import.Register",
          "unit": "VARh",
          "value": 6789
      }
  ],
  "timestamp": "2022-05-01T12:00:00.000Z",
  "sampledValue": []
  }
});  
*/

/** 
**Listen for the response to the MeterValues request
*/

/**
 socket.on('MeterValues', (response) => {
  console.log('MeterValues response:', response);
}); 
*/

 
/** 
* *Send a DataTransfer request
*/
/** 
  socket.emit('DataTransfer', {
  action: 'DataTransfer',
  "messageTypeId": "18",
  "vendorId": "vendor1",
  "messageId": "message1",
  "data": "testdata"
}); 
*/
/** 
**Listen for the response to the DataTransfer request 
*/

/**
 socket.on('DataTransfer', (response) => {
  console.log('DataTransfer response:', response);
}); 
*/

/** 
* *Send a StatusNotification request
*/
/**  
 socket.emit('StatusNotification', {
  action: 'StatusNotification',
   "messageTypeId": "5",
  "connectorId": "1",
  "errorCode": "NoError",
  "status": "Available",
  "timestamp": "2022-04-29T00:00:00Z"
});
 */
/** 
**Listen for the response to the StatusNotification request
*/

/**
 socket.on('StatusNotification', (response) => {
  console.log('StatusNotification response:', response);
});
*/ 



/** 
* *Send a FirmwareStatusNotification request
*-
/** 
  socket.emit('FirmwareStatusNotification', {
  action: 'FirmwareStatusNotification',
  "messageTypeId": "24",
  "status": "Downloaded",
  "requestId": "1",
  "errorCode": "NoError",
  "errorDescription": "No Error",
  "additionalInfo": {
    "vendorId": "vendor1",
    "firmwareVersion": "v1.0"
});
 */
/** 
**Listen for the response to the FirmwareStatusNotification request
*/

/**
  socket.on('FirmwareStatusNotification', (response) => {
  console.log('FirmwareStatusNotification response:', response);
}); 
*/

/** 
* *Send a  changeavailability request
*/
/** 
  socket.emit('changeavailability', {
  action: 'changeavailability',
  "messageTypeId": "26",
  "connectorId": "1",
  "type": "Operational"
}); 
*/
/** 
**Listen for the response to the changeavailability request
*/

/**
  socket.on('changeavailability', (response) => {
  console.log('changeavailability response:', response);
}); 
*/
/** 
* *Send a  changeconfiguration request
*/
/**  
 socket.emit('changeconfiguration', {
  "messageTypeId": "19",
  "key": "configkey",
  "value": "configvalue"
});
 */
/** 
* *Listen for the response to the changeconfiguration request 
*/

/**
 * socket.on('changeconfiguration', (response) => {
  console.log('changeconfiguration response:', response);
});
*/

