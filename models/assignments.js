var db = require('./db')

getAssignmentsByCourseId = (course_id, callback) => {
    const sql = 'SELECT * FROM assignments where course_id = ?'
    db.all(sql, course_id, (err, rows) => {
            if (err || rows == undefined) {

                throw err
            } else {
                callback(rows)
            }
        }
    );
}

getAssignmentsByStudentId = (student_id, callback) => {
    const sql = 'SELECT a.* FROM assignments a JOIN courses c ON c.id = a.course_id JOIN enrollments e ON e.course_id = c.id WHERE e.student_id = ?'
    db.all(sql, student_id, (err, rows) => {
        if (err || rows == undefined) {
            throw err;
        }
        else {
            callback(rows);
        }
    })
}

module.exports = {
    getAssignmentsByCourseId,
    getAssignmentsByStudentId
}