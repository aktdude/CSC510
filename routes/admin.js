const {json} = require('express');
var express = require('express');
var router = express.Router();
var courses = require('../models/courses.js')
var users = require('../models/users.js')


router.post('/addcourse', function (req, res) {
    body = req.body
    courses.addNewCourse(body.course_name, body.professor_id, body.max_seats, body.description, body.teaching_method, body.credits, body.course_term, body.department, body.days_of_the_week, body.class_times, (result) => {
        return res.status(result.status).json({"message": result.message, "course_id": result.course_id});
    });
});


router.delete('/deletecourse', function (req, res) {
    courses.deleteCourse(req.query.course_id, (result) => {
        return res.status(result.status).json({"message": result.message});
    });
})

router.post('/adduser', function (req, res) {
    body = req.body
    users.addNewUser(body.name, body.email, body.password, body.role, body.phone_number, (result) => {
        return res.status(result.status).json({"message": result.message});
    });
});


router.delete('/deleteuser', function (req, res) {
    users.deleteUser(req.query.user_id, (result) => {
        return res.status(result.status).json({"message": result.message});
    });
})

module.exports = router;