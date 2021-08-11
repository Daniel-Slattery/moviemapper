
const request = require('supertest');
const Pin = require('../models/pin');
const express = require('express')
const pinRoute = require('../routes/pin');

const app = express();


app.use(express.json());
app.use('/routes/pins', pinRoute);


afterAll(async () => {
    await Pin.deleteMany();

});

describe('Backend Tests : Pins?', () => {
    test('get method', async () => {
        const res = await request(app).get('/routes/pins/')
        console.log(`pinController res: `, res.body)
        return request(app)
            .get('/routes/pins/')
            .expect(200)
    });

    const pin = {
        username: 'Ben',
        title: 'Bermuda Triangle',
        description: 'kinda triangular',
        rating: 4,
        latitude: 3,
        longitude: 45
    }
    test('post method', async () => {
        const res = await request(app)
            .post('/routes/pins/')
            .send(pin)
        expect(res.body.title).toBe(pin.title)
    })

});




