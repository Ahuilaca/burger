
// *******************************************************************
var connection = require("./connection.js");
var orm = {
    all: function(burgerInput, cb) {
        connection.query("SELECT * FROM " +burgerInput+";", function(err, result){
            if(err) throw err;
            cb(result)
        })
    },

    // ******************************************************************
    update: function(burgerInput, condition, cb) {
        connection.query("UPDATE " +burgerInput+" SET devoured=true WHERE id=" +condition+";", function(err, result){
            if(err)throw err;
            cb(result);
        })
    },
    create: function(burgerInput, val, cb) {
        connection.query("INSERT INTO " +burgerInput+" (burger_name) VALUES ('"+val+"');", function(err, result) {
            if(err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;
