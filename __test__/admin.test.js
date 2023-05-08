const server = require('../app.js');
const supertest = require('supertest');
const {json} = require("express");
const requestWithSupertest = supertest(server);
var db = require('../models/db.js')

//To test  deleting a course.
describe('Delete a Course', () => {
    it('DELETE /admin/deletecourse?course_id=course_id should delete the given course', async () => {
        last_course_id = 8;
        const res = await requestWithSupertest.delete(`/api/admin/deletecourse?course_id=${last_course_id})`);
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('application/json'));
    });
});

describe('Add a Course', () => {
    it('POST /admin/addcourse should add the given course', async () => {
        const res = await requestWithSupertest.post('/api/admin/addcourse').send({
            "course_name": "Computer and Network Security",
            "professor_id": "6",
            "max_seats": "50",
            "description": "OS Security, Network Security, Privacy, Cryptography",
            "teaching_method": "IP",
            "credits": "3",
            "course_term": "Fall",
            "department": "CSC",
            "days_of_the_week": "Mon & Wed",
            "class_times": "10:15-11:30 am"
        });
        
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('application/json'));
    });

});



describe('Delete a User', () => {
    it('POST /admin/adduser should add the given user', async () => {
        const res = await requestWithSupertest.post('/api/admin/adduser').send({
            "name": "HK2",
            "email": "hk100@ncsu.edu",
            "password": "4f5fdb3de5aa701eae2961743a00c01c",
            "role": "T",
            "phone_number": "8926738956"
        });
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('application/json'));
        expect((res)=> {
            res.body.message = "Added new user";
        });
    });

    it('DELETE /admin/deleteuser?user_id=user_id should delete the given user', async () => {
        last_user_id = db.lastInsertRowId;
        const res = await requestWithSupertest.delete(`/api/admin/deleteuser?user_id=${last_user_id})`);
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('application/json'));
        expect((res)=> {
            res.body.message = "Deleted user";
        });
    });

});



