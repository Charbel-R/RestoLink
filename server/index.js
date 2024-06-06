const express = require('express');


const database = require('./database');
const PORT = 3000
const app = express();



async function listen () {
  try {
    await database;
    console.log('database listening...');
    app.listen(PORT, () => {
      console.log(`server listening on port ${PORT} ...`);
    });
  } catch (err) {
    console.error('server error:', err);
  }
}

listen();