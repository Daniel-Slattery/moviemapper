
const mongoose = require('mongoose');
const DB_URL = "mongodb://localhost:27017/";
const DB_NAME = "messageDB";

mongoose.connect(`${DB_URL}${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Database is connected!📍')
    })
    .catch((e) => console.log(e));

module.exports = mongoose;