const mongoose = require('mongoose');

console.log(process.env.MONGO_URI)
const URI = 'mongodb://localhost:27017/restolink';

const database = mongoose.connect(process.env.MONGO_URI || URI);



module.exports = database;
