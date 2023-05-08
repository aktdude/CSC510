var express = require('express');
var router = express.Router();
var users = require('../models/users.js')


router.get('/:id', function (req, res, next) {
    users.getUserById(req.params.id, (result) => {
        res.status(200).json({result: (result)});
    })
});
router.get('/', function (req, res, next) {
    users.getAllUsers( (result) => {
        res.status(200).json({result: (result)});
    })
});


module.exports = router;
