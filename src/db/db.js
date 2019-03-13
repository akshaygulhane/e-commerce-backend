const mysql = require('mysql');

const config = require('./../helpers/config');

const ENV = process.env.NODE_ENV || 'prod';

const dbConfig = config[ENV].db;

const connection = mysql.createConnection(dbConfig);

connection.connect();

//For testing connection
/*
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
  
connection.end();
*/

module.exports = connection;