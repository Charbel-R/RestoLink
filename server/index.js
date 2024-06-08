const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/user.route')
const authRoutes = require('./routes/auth.route')
const suppliersRoutes = require('./routes/suppliers.route')

const database = require('./database');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors())

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/suppliers', suppliersRoutes )


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
