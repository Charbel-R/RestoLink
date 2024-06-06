const mongoose = require('mongoose');


const URI = 'mongodb://localhost:27017/restolink';

const database = mongoose.connect(URI);

module.exports = database;
