require('dotenv').config();
const mongoose = require('mongoose');
const dbName = process.env.NODE_ENV === 'development' ? process.env.DB_NAME : process.env.DB_NAME_TEST


mongoose.connect(`${process.env.DB_URL}${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Database is connected!📍')
    })
    .catch((e) => console.log(e));

module.exports = mongoose;