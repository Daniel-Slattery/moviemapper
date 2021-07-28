const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const pinRoute = require('./routes/pin');
require('dotenv').config();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;
const app = express();


app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null, 'uploads')
  },
  filename: (req,file,cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

const upload = multer({ storage: storage });

mongoose.connect(`${DB_URL}${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Database is connected!📍')
  })
  .catch((e) => console.log(e));

app.use('/routes/pins', pinRoute)

app.listen(PORT, (e) => {
  if (e) console.log(e);
  console.log(`Server is running on http://localhost:${PORT}!!🚀`)
})

