const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const {cms}=require('./Controllers/cms');
const route=require('./Controllers/routes')

const PORT = process.env.PORT || 3000;
/**
 ** connection with db and socket and server 
 *  */ 
/*****
 ?  *mongo connection
 *   */
/*****
 *?  node js express server
 *   */
 cms();
 app.use('/',route);
 app.listen(4000)
/*****
 *?  cms
 *   */
/*********************************** */

