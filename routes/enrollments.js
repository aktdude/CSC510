var express = require('express');
var router = express.Router();
var enrollments = require('../models/enrollments.js')


router.get('/', function (req, res, next) {
    //hardcoded for now will have to set up session/login later
    const user_id = 4
    enrollments.getEnrollmentsByStudentId(user_id, (result) => {
        res.status(200).json(result);
    })
});

router.get('/enrollable', function (req, res) {
    const student_id = 4
    enrollments.getEnrollableCoursesByStudentId(student_id, (result) => {
        res.status(200).json(result);
    })
})


router.get('/enrollable/students/:course_id', function (req, res) {
    enrollments.getEnrollableStudentsByCourseId(req.params.course_id, (result) => {
        res.status(200).json(result);
    })
})

router.post('/', function (req, res) {
    enrollments.createEnrollment(req.body.course_id, req.body.student_id, (result) => {
        console.log(result)
        res.status(201).json(result);
    })

})

router.delete('/', function (req, res) {
    enrollments.deleteEnrollment(req.query.course_id, req.query.student_id, (result) => {
        res.status(200).json(result);
    })
})

router.get('/:course_id', function (req, res) {
    enrollments.getStudentsByCourseId(req.params.course_id, (result) => {
        res.status(200).json(result);
    })
})

module.exports = router;
