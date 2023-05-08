const server = require('../bin/www');
const request = require('supertest');
beforeAll(done => {
    done()
})

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    server.close()
    done()
})
describe('Testing Enrollments API', () => {
    it("GET /api/enrollments", (done) => {
        request(server).get("/api/enrollments")
            .expect(200).end((err, res) => {
            if (err) return done(err);
            return done();
        });
    });
    it("GET /api/enrollments/enrollable", (done) => {
        request(server).get("/api/enrollments/enrollable")
            .expect(200).end((err, res) => {
            if (err) return done(err);
            return done();
        });
    });
    it("GET /api/enrollments/enrollable/students/:course_id", (done) => {
        request(server).get("/api/enrollments/enrollable/students/3")
            .expect(200).end((err, res) => {
            if (err) return done(err);
            return done();
        });
    });
    it("GET /api/enrollments/:course_id", (done) => {
        request(server).get("/api/enrollments/3")
            .expect(200).end((err, res) => {
            if (err) return done(err);
            return done();
        });
    });
    it("POST /api/enrollments", (done) => {
        request(server).post("/api/enrollments").send({
            "course_id": 3,
            "student_id": 3
        })
            .expect(201).end((err, res) => {
            if (err) return done(err);
            return done();
        });
    });
    it("DELETE /api/enrollments?course_id=&student_id=", (done) => {
        request(server).delete("/api/enrollments?course_id=3&student_id=3")
            .expect(200).end((err, res) => {
            if (err) return done(err);
            return done();
        });
    });
});