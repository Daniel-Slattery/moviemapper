const express = require('express');
const cors = require('cors');

const pinRoute = require('./routes/pin');
const userRoute = require('./routes/users');
require('dotenv').config();
const PORT = 3001;

const app = express();

app.use(cors());
app.use(express.json());



app.use('/routes/pins', pinRoute);
app.use('/routes/users', userRoute);

app.listen(PORT, (e) => {
  if (e) console.log(e);
  console.log(`Server is running on http://localhost:${PORT}!!🚀`)
})

module.exports = app;