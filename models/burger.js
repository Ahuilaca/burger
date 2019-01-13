
// Using ORM to collect data from databse and sending to controllers folder *******
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res){
            cb(res);
        })
    },
    update: function(id, cb){
        orm.update("burgers", id, cb);
    },
    create: function(name, cb) {
        orm.create("burgers", name, cb);
    }
}

module.exports = burger;
