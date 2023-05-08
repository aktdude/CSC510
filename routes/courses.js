var express = require('express');
var router = express.Router();
var courses = require('../models/courses.js')

router.get('/', function (req, res, next) {
    //hardcoded for now will have to set up session/login later
    const teacher_id = 6
    courses.getAllCourses((result) => {
        res.status(200).json({result: (result)});
    })
});

// To be used later for finding a teacher by ID
router.get('/teacher', function (req, res, next) {
    //hardcoded for now will have to set up session/login later
    const teacher_id = 6
    courses.getCoursesByTeacherId(teacher_id, (result) => {
        res.status(200).json({result: (result)});
    })
});

router.get('/:id', function (req, res) {
    courses.getCourseDetailsById(req.params.id, (result) => {
        res.status(200).json({result: (result)});
    })

})

module.exports = router;



