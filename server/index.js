const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/user.route')
const authRoutes = require('./routes/auth.route')

const database = require('./database');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use('/user', userRoutes);
app.use('/auth', authRoutes);



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
