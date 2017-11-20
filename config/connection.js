/// @author: David Thurman
// @github: doctort57
// @comment: Homework 14 - Eat the Burger!



// Node Dependency
var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'RowanP96', // Add your password
    database : 'burgers_db' // Add your database
  });
}


// Export the Connection
module.exports = connection;