const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;
const database = require('./database');
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