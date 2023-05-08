var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "test.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE users
                (
                    id           INTEGER PRIMARY KEY AUTOINCREMENT,
                    name         text,
                    email        text,
                    password     text,
                    role CHECK ( role IN ('S', 'T', 'A') ) DEFAULT 'S',
                    phone_number text CHECK (length(phone_number) = 10)
                )
            `,
            (err) => {
                if (err) {
                    console.log(err.message)
                    throw err
                    // Table already created
                } else {
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO users (name, email, password, role, phone_number) VALUES (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?)'
                    db.run(insert, [
                        "Admin", "admin@example.com", md5("admin123456"), 'A', "8767898789",
                        "Indira Pimpalkhare", "ipimpal@ncsu.edu", md5("ipimpal"), 'S', "1256354587",
                        "McKenna Corn", "mkcorn@ncsu.edu", md5("mkcorn"), 'S', "9867834567",
                        "Roman Peace", "ropeace@ncsu.edu", md5("ropeace"), 'S', "1234567890",
                        "Jeffrey Zeng", "jzeng4@ncsu.edu", md5("jzeng4"), 'S', "1234567890",
                        "Professor Pavan Gandhi", "prof1@ncsu.edu", md5("prof1"), 'T', "8926738956"
                    ])

                }
            });
        console.log('Users Table created in SQLite database.')
        db.run(`CREATE TABLE courses
                (
                    id               INTEGER PRIMARY KEY AUTOINCREMENT,
                    course_name      text                                                                                            NOT NULL,
                    professor_id     INTEGER                                                                                         NOT NULL,
                    max_seats        INTEGER CHECK (max_seats >= 0)                                                   DEFAULT 10,
                    description      text                                                                                            NOT NULL,
                    teaching_method  text CHECK ( teaching_method IN ('IP', 'H', 'OL') )                              DEFAULT 'IP',
                    credits          INTEGER CHECK (credits >= 1)                                                     DEFAULT 3,
                    course_term      text CHECK ( course_term IN ('Fall', 'Spring', 'Summer') )                       DEFAULT 'Fall' NOT NULL,
                    department       text                                                                                            NOT NULL,
                    days_of_the_week text CHECK ( days_of_the_week IN ('Mon & Wed', 'Tue & Thu', 'Mon & Wed & Fri') ) DEFAULT 'Mon & Wed',
                    class_times      text CHECK ( class_times IN
                                                  ('8:30-9:45 am', '10:15-11:30 am', '11:45-1:00 pm', '1:30-2:45 pm',
                                                   '3:00-4:15 pm',
                                                   '4:30-5:45 pm', '6:00-7:15 pm')
                        )                                                                                             DEFAULT '8:30-9:45 am',
                    FOREIGN KEY (professor_id)
                        REFERENCES users (id)
                )
            `,
            (err) => {
                if (err) {
                    console.log(err.message)
                    throw err
                    // Table already created
                } else {
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO courses (course_name, professor_id, max_seats, description, teaching_method, credits, course_term, department, days_of_the_week, class_times) VALUES (?,?,?,?,?,?,?,?,?,?), (?,?,?,?,?,?,?,?,?,?), (?,?,?,?,?,?,?,?,?,?), (?,?,?,?,?,?,?,?,?,?), (?,?,?,?,?,?,?,?,?,?), (?,?,?,?,?,?,?,?,?,?), (?,?,?,?,?,?,?,?,?,?)'
                    db.run(insert, [
                        "Software Engineering", 6, 5, "An introduction to software life cycle models; size estimation; cost and schedule estimation; project management; analysis, design, coding and testing methods. Emphasis on large development projects.", "IP", 3, 'Fall', "CSC", "Tue & Thu", "3:00-4:15 pm",
                        "Computer Networks", 6, 2, "General introduction to computer networks. Discussion of protocol principles, local area and wide area networking, OSI stack, TCP/IP and quality of service principles.", "IP", 3, 'Spring', "CSC", "Tue & Thu", "4:30-5:45 pm",
                        "DevOps", 6, 100, "Gain practical exposure to the skills, tools, and knowledge needed in automating software engineering processes and infrastructure.", "IP", 3, 'Spring', "CSC", "Tue & Thu", "11:45-1:00 pm",
                        "Intro to Artificial Intelligence", 6, 90, "Overview and definitions of Artificial Intelligence (AI). Search, including depth-first and breadth-first techniques with backtracking.", "IP", 3, 'Spring', "CSC", "Mon & Wed", "8:30-9:45 am",
                        "Human Computer Interactions", 6, 100, "A survey of concepts and techniques for user interface design and human-computer interaction.", "IP", 3, 'Fall', "CSC", "Mon & Wed", "1:30-2:45 pm",
                        "Learning and Motivation", 6, 40, "Introduction to the primary laboratory research areas in learning and motivation: classical conditioning, operant conditioning, verbal learning, drive theory, and the role of motives.", "IP", 3, 'Spring', "PSY", "Mon & Wed", "3:00-4:15 pm",
                        "Ethics in Computing", 6, 75, "This course examines the role of the computing professional in modern society, focusing on the ethical and moral responsibilities of the profession.", "IP", 1, 'Fall', "CSC", "Mon & Wed", "8:30-9:45 am"
                    ])
                }
            });
        console.log('Courses Table created in SQLite database.')
        db.run(`CREATE TABLE enrollments
                (
                    id            INTEGER PRIMARY KEY AUTOINCREMENT,
                    course_id     INTEGER NOT NULL,
                    student_id    INTEGER NOT NULL,
                    enrolled_date date,
                    is_waitlisted INTEGER CHECK ( is_waitlisted IN (0, 1) ) DEFAULT 0,

                    FOREIGN KEY (course_id)
                        REFERENCES courses (id),

                    FOREIGN KEY (student_id)
                        REFERENCES users (id)
                )
            `,
            (err) => {
                if (err) {
                    console.log(err.message)
                    throw err
                    // Table already created
                } else {
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO enrollments (course_id, student_id, enrolled_date, is_waitlisted) VALUES (?,?,?,?)'
                    db.run(insert, [1, 2, '2023-03-20', 0])
                    db.run(insert, [2, 4, '2023-03-22', 0])
                    db.run(insert, [3, 4, '2023-04-08', 0])
                    db.run(insert, [4, 4, '2023-04-10', 0])
                }
            });
        console.log('Enrollments Table created in SQLite database.')
        db.run(`CREATE TABLE assignments
                (
                    id             INTEGER PRIMARY KEY AUTOINCREMENT,
                    course_id      INTEGER NOT NULL,
                    assignment_doc BLOB    NOT NULL,
                    max_marks      FLOAT,
                    due_date       DATETIME,
                    assigned_date  DATETIME,

                    FOREIGN KEY (course_id)
                        REFERENCES courses (id)
                )
            `,
            (err) => {
                if (err) {
                    console.log(err.message)
                    throw err
                    // Table already created
                } else {
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO assignments (course_id, assignment_doc, max_marks, due_date, assigned_date) VALUES (?,?,?,?,?)'
                    db.run(insert, [1, 'abc', 100.0, '2023-03-20 00:00 UTC', '2023-03-25 23:59 UTC'])
                    db.run(insert, [2, 'efg', 100.0, '2023-03-21 00:00 UTC', '2023-03-29 23:59 UTC'])
                }
            });
        console.log('Assignments Table created in SQLite database.')
        db.run(`CREATE TABLE submissions
                (
                    id             INTEGER PRIMARY KEY AUTOINCREMENT,
                    assignment_id  INTEGER NOT NULL,
                    submission_doc BLOB,
                    marks_obtained FLOAT,
                    is_graded      BOOLEAN,
                    date_submitted DATETIME,

                    FOREIGN KEY (assignment_id)
                        REFERENCES assignments (id)
                )
            `,
            (err) => {
                if (err) {
                    console.log(err.message)
                    throw err
                    // Table already created
                } else {
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO submissions (assignment_id, submission_doc, marks_obtained, is_graded, date_submitted) VALUES (?,?,?,?,?)'
                    db.run(insert, [1, 'abc-soln', 98.5, true, '2023-03-22 23:10 UTC'])
                    db.run(insert, [2, 'efg-slon', 0.0, false, '2023-03-25 05:30 UTC',])
                }
            });
        console.log('Submissions Table created in SQLite database.')
    }
});


module.exports = db