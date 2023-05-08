var db = require('./db')

getEnrollmentsByStudentId = (student_id, callback) => {
    const sql = 'SELECT c.*, e.* FROM enrollments e INNER JOIN courses c on c.id = e.course_id where e.student_id = ?'
    db.all(sql, student_id, (err, rows) => {
            if (err || rows == undefined) {
                throw err
            } else {
                callback(rows)
            }
        }
    );
}

createEnrollment = (course_id, student_id, callback) => {
    const sql = 'INSERT INTO enrollments (course_id, student_id, enrolled_date, is_waitlisted) VALUES (?,?,?,?)';

    db.run(sql, [course_id, student_id, new Date().toISOString(), false], (err, result) => {
        if (err) {
            throw err
        } else {
            result = {
                "message": "Enrolled successfully"
            }
            callback(result);
        }
    })
}

getEnrollableCoursesByStudentId = (student_id, callback) => {
    const sql = 'SELECT * from courses where id NOT IN (SELECT course_id FROM enrollments WHERE student_id = ?)'
    db.all(sql, student_id, (err, rows) => {
        if (err || rows == undefined) {
            throw err;
        } else {
            callback(rows);
        }
    })
}

getEnrollableStudentsByCourseId = (course_id, callback) => {
    const sql = 'SELECT * from users where role = \'S\' AND id NOT IN (SELECT student_id from enrollments WHERE course_id = ?)'
    db.all(sql, course_id, (err, rows) => {
        if (err || rows == undefined) {
            throw err;
        } else {
            callback(rows);
        }
    })
}

getStudentsByCourseId = (course_id, callback) => {
    const sql = 'SELECT e.*, u.id, u.name, u.email, u.role, u.phone_number FROM enrollments e JOIN users u on e.student_id = u.id where course_id = ?'
    db.all(sql, course_id, (err, rows) => {
        if (err || rows == undefined) {
            throw err;
        } else {
            callback(rows);
        }
    })
}

deleteEnrollment = (course_id, student_id, callback) => {
    const sql = 'DELETE FROM enrollments where course_id = ? and student_id = ?'
    db.run(sql, [course_id, student_id], (err, result) => {
        if (err) {
            throw err;
        } else {
            result = {
                "message": "Enrollment deleted successfully"
            }
            callback(result);
        }
    })
}

module.exports = {
    getEnrollmentsByStudentId,
    createEnrollment,
    getEnrollableCoursesByStudentId,
    getStudentsByCourseId,
    deleteEnrollment,
    getEnrollableStudentsByCourseId
}


