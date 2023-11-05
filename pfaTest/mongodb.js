const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://manal:manal@cluster0.an1fwbp.mongodb.net/?retryWrites=true&w=majority';

async function connectToMongoDB() { (await mongoose.connect(MONGO_URI));}
module.exports={connectToMongoDB}  ;
/*



*/