const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/user.route')
const database = require('./database');
const PORT = process.env.PORT || 3000;
const app = express();


app.use('/user', userRoutes);



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
