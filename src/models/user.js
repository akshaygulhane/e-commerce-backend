const connection = require('./../db/db');

module.exports = {
    findUserByID: function findUserByID(user_id) {
        console.log(`finding user by id : ${user_id}`); 
        connection.query(`SELECT * FROM USERS WHERE ID like ${user_id} ;`, function(err, data) {
            if(err) {
                console.log(`Error while retrieving data..`);
                return false;
            }
            console.log(data);
        })
    },

    findUserByEmail: function findUserByEmail(user_id) {
        console.log(`finding user by id : ${user_id}`); 
        connection.query(`SELECT * FROM USERS WHERE ID like ${user_id} ;`, function(err, data) {
            if(err) {
                console.log(`Error while retrieving data..`);
                return false;
            }
            console.log(data);
        })
    },
}