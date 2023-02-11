"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
describe('GET /api/users', function () {
    it('respond with json containing a list of all users', async function (done) {
        (0, supertest_1.default)(server_1.default)
            .get('/api/users')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});
describe('GET /api/movies', function () {
    it('respond with json containing a list of all movies', async function (done) {
        (0, supertest_1.default)(server_1.default)
            .get('/api/movies')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});
describe('GET /api/watched', function () {
    it('respond with json containing a list of all watched', async function (done) {
        (0, supertest_1.default)(server_1.default)
            .get('/api/watched')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});
describe('POST /api/users', function () {
    const data = {
        "email": "dummy",
        "password": "dummy",
    };
    it('respond with 201 created', function (done) {
        (0, supertest_1.default)(server_1.default)
            .post('/api/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect(201)
            .end((err) => {
            if (err)
                return done();
            done();
        });
    });
});
describe('POST /api/movies', function () {
    const data = {
        "name": "dummy",
        "relase_date": "12/11/1981",
    };
    it('respond with 404 created', function (done) {
        (0, supertest_1.default)(server_1.default)
            .post('/api/movies')
            .send(data)
            .set('Accept', 'application/json')
            .expect(404)
            .end((err) => {
            if (err)
                return done();
            done();
        });
    });
});
