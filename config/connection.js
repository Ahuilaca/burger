
// Requiring mysql ******************************************
var mysql = require("mysql");

// Creating connection to mysql **************************************
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        //port: 5000,
        host: "localhost",
        user: "root",
        password: "ahuilaca",
        database: "burgers_db"
    });
};

    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected as id: " + connection.threadId);
    });


    module.exports = connection;