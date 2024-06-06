const mongoose = require('mongoose');
const URI = process.env.MONGO_URI;

const database = mongoose.connect(URI || 'mongodb://localhost:27017/restolink');



module.exports = database;
