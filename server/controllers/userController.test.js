
const request = require('supertest');
const app = require('../index');
const User = require('../models/user');

afterEach(async () => {
    await User.deleteMany();
});

describe('Backend Tests : Register', () => {
    test('get method', async () => {
        const res = await request(app).get('/routes/users/register')
        return request(app)
            .get('/routes/users/register')
            .expect(200)
    });

    test('post method', async () => {
        const user = { username: 'cey', email: 'cey@email.com', password: 'abdaosjdoaisjsdfsd' }
        const res = await request(app)
            .post('/routes/users/register')
            .send(user)
        expect(res.body.username).toBe(user.username)
    })

});


describe('Backend Tests : Login', () => {
    test('post method', async () => {
        const user = { username: 'Mike', email: 'mike@email.com', password: 'mikerules' }
        const res = await request(app)
            .post('/routes/users/register')
            .send(user)
        const user1 = { username: 'Mike', password: 'mikerules' }
        const res1 = await request(app)
            .post('/routes/users/login')
            .send(user1)
        expect(res1.body.username).toBe(user1.username)
    })

});
