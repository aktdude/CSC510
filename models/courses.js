var db = require('./db')
const {call} = require("cors");

addNewCourse = (course_name, professor_id, max_seats, description, teaching_method, credits, course_term, department, days_of_the_week, class_times, callback) => {
    const sql = 'INSERT INTO courses (course_name, professor_id, max_seats, description, teaching_method, credits, course_term, department, days_of_the_week, class_times) VALUES (?,?,?,?,?,?,?,?,?,?)'
    db.run(sql, course_name, professor_id, max_seats, description, teaching_method, credits, course_term, department, days_of_the_week, class_times, function(err) {
            if (err) {
                callback({
                    "status": 500,
                    "message": err.message
                })
            } else {
                callback({
                    "status": 200,
                    "message": "Added new course",
                    "course_id": this.lastID
                })
            }

        }
    );
}

deleteCourse = (course_id, callback) => {
    const sql = 'DELETE FROM courses WHERE id = (?)'
    db.run(sql, course_id, (err, res) => {
            if (err) {

                callback({
                    "status": 500,
                    "message": err.message
                });
            } else {
                console.log("Deleted Course now enrollments")
                const result_del_course = {
                    "status": 200,
                    "message": "Deleted Course"
                }
                const sql_enrollment = 'DELETE FROM enrollments WHERE course_id = ?'
                db.run(sql_enrollment, course_id, (err, res) => {
                    if (err) {
                        callback({
                            "status": 500,
                            deleteCourse: result_del_course,
                            "message": err.message
                        })
                    }
                    else {
                        const result = {
                            "status": 200,
                            "message": "Enrollments and Course deleted successfully"
                        }
                        callback(result)
                    }
                })
            }
        }
    );
}

getCoursesByTeacherId = (teacher_id, callback) => {
    const sql = 'SELECT c.* FROM courses c where c.professor_id = ?'
    db.all(sql, teacher_id, (err, rows) => {
            if (err || rows == undefined) {

                throw err
            } else {
                callback(rows)
            }
        }
    );
}

getCourseDetailsById = (course_id, callback) => {
    console.log('getting course details of id ' + course_id)
    const sql = 'SELECT c.* FROM courses c where c.id = ?'
    db.all(sql, course_id, (err, rows) => {
            if (err || rows == undefined) {
                throw err
            } else {
                console.log(rows)
                callback(rows)
            }
        }
    );
}

getAllCourses = (callback) => {
    const sql = 'SELECT * FROM courses';
    db.all(sql, (err, rows) => {
        if (err || rows == undefined) {
            throw err
        } else {
            console.log(rows);
            callback(rows);
        }
    })
}

module.exports = {
    addNewCourse, deleteCourse, getCoursesByTeacherId, getCourseDetailsById, getAllCourses
}



