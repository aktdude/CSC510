var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "test.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');

});

module.exports = db
