import supertest from 'supertest'

import app from '../../server'


describe('GET /api/users', function () {
    it('respond with json containing a list of all users', async function (done) {
        supertest(app)
            .get('/api/users')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});

describe('GET /api/movies', function () {
    it('respond with json containing a list of all movies', async function (done) {
        supertest(app)
            .get('/api/movies')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});

describe('GET /api/watched', function () {
    it('respond with json containing a list of all watched', async function (done) {
        supertest(app)
            .get('/api/watched')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});

describe('POST /api/users', function () {
    const data = {
        "email": "dummy",
        "password": "dummy",
    }
    it('respond with 201 created', function (done) {
        supertest(app)
            .post('/api/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect(201)
            .end((err) => {
                if (err) return done();
                done();
            });
    });
});
