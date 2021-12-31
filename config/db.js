const mysql = require("mysql");
require("dotenv").config();

module.exports = mysql.createPool({
  host: process.env.DB_,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

// conn.getConnection(function (err) {
//   if (err) {
//     throw err;
//   } else {
//     console.log("***** Connection to database successfully *****");
//   }
// });

// module.exports = conn;
