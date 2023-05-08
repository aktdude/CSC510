const server = require('../app.js');
const supertest = require('supertest');
const {json} = require("express");
const requestWithSupertest = supertest(server);


describe('Get teacher by id', () => {
    it('GET /courses/teacher should get the teacher with given id', async () => {
        const res = await requestWithSupertest.get('/api/courses/teacher');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('application/json'));
    });
});

describe('Get course details by id', () => {
    it('GET /courses/:id should get the course with given id', async () => {
        const res = await requestWithSupertest.get("/api/courses/1");
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('application/json'));
    });
});

describe('Get all available courses', () => {
    it('GET /courses/ should get all the available courses', async () => {
        const res = await requestWithSupertest.get('/api/courses/');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('application/json'));
    });
});