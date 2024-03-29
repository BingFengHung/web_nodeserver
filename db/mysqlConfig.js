const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 100,
});

connection.connect(function(err) {
  if (!err) {
    console.log('Database is connected ...');
  } else {
    console.log('Error connecting database ...');
  }
});

exports.connect = connection;
