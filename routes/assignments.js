// var express = require('express');
// var router = express.Router();
// var assignments = require('../models/assignments.js')

// router.get('/:course_id', function (req, res, next) {
//     //hardcoded for now will have to set up session/login later
//     console.log('Assignment by course_id');
//     assignments.getAssignmentsByCourseId(req.params.course_id, (result) => {
//         console.log(result)
//         res.status(200).json({result: (result)});
//     })
// });
// router.get('/', function (req, res, next) {
//     //hardcoded for now will have to set up session/login later
//     if(!req.query.student_id)
//         res.status(404).json({result: "Path does not exist"});
//     else {
//         assignments.getAssignmentsByStudentId(req.query.student_id, (result) => {
//             console.log(result)
//             res.status(200).json({result: (result)});
//         })
//     }
// });
// module.exports = router;


