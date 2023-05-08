const server = require('../app.js');
const supertest = require('supertest');
const {json} = require("express");
const requestWithSupertest = supertest(server);

describe('GET user by id', () => {

    it('GET /users should get the user with given id', async () => {
        const user_id = 1
        const res = await requestWithSupertest.get("/api/users/1");
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('application/json'));
    });

});

describe('GET all users', () => {

    it('GET /users should get all the users', async () => {
        const res = await requestWithSupertest.get('/api/users');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('application/json'));
    });

});