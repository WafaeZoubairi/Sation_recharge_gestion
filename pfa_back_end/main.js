/****express js for running a server  */
const express= require('express');
require('dotenv').config();
const app= express();
const PORT=3000;
cors=require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// parse application/x-www-form-urlencoded


// parse application/json
app.use(bodyParser.json());
/***** my sql for db  */

/****** */
const loginRoutes = require('./routes/loginRoutes')
const dashboardRoutes=require('./routes/CPORoutes')
const borneRoutes=require('./routes/borneRoutes')

app.use('/',loginRoutes);
app.use('/CPO',dashboardRoutes)
app.use('/borne',borneRoutes)

app.listen(process.env.PORT,()=>console.log("running now"));