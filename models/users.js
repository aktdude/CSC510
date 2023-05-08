var db = require('./db')

 addNewUser = (name, email, password, role, phone_number, callback) => {
    const sql = 'INSERT INTO users (name, email, password, role, phone_number) VALUES (?,?,?,?,?)'
    db.run(sql, name, email, password, role, phone_number, (err) => {
            if (err) {

                callback({
                    "status": 500,
                    "message": err.message
                })
            }
            else {
                callback({
                    "status": 200,
                    "message": "Added new user"
                })

            }
        }
    );
}

deleteUser = (user_id, callback) =>{
    const sql = 'DELETE FROM users WHERE id = (?)'
    db.run(sql, user_id, (err) => {
            if (err) {

                callback({
                    "status": 500,
                    "message": err.message
                }) ;
            }
            else {
                const result_delete_user = {
                    "status": 200,
                    "message": "Deleted User"
                }
                const sql_enrollment = 'DELETE FROM enrollments WHERE student_id = ?'
                db.run(sql_enrollment, user_id, (err, res) => {
                    if (err) {
                        callback({
                            "status": 500,
                            deleteCourse: result_delete_user,
                            "message": err.message
                        })
                    }
                    else {
                        const result = {
                            "status": 200,
                            "message": "Enrollments and User deleted successfully"
                        }
                        callback(result)
                    }
                })
            }
        }
    );

}

getUserById = (user_id, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?'
    db.all(sql, user_id, (err, rows) => {
            if (err || rows == undefined) {
                throw err;

            }
            else {
                callback(rows)

            }
        }
    );
}

getAllUsers = (callback) => {
    const sql = 'SELECT * FROM users';
    db.all(sql, (err, rows) => {
        if (err || rows == undefined) {
            throw err;
        }
        else {
            callback(rows);

        }
    }
    );

}

module.exports = {
    addNewUser, deleteUser, getUserById, getAllUsers
}
