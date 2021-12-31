const mysql = require("mysql");

function index(conn, callback) {
  let sql = "select * from employee";
  conn.query(sql, callback);
}

function getById(conn, id, callback) {
  let getSql = "select * from employee where employee_id=?";
  let sql = mysql.format(getSql, id);

  conn.query(sql, callback);
}

function create(conn, data, callback) {
  let insertSql =
    "insert into employee (name, last_name, dni, phone) values(?,?,?,?)";
  let sql = mysql.format(insertSql, [
    data.name,
    data.last_name,
    data.dni,
    data.phone,
  ]);

  conn.query(sql, callback);
}

function update(conn, data, id, callback) {
  let updateSql =
    "update employee set name=?, last_name=?, dni=?, phone=? where employee_id=? ";
  let sql = mysql.format(updateSql, [
    data.name,
    data.last_name,
    data.dni,
    data.phone,
    id,
  ]);

  conn.query(sql, callback);
}

function remove(conn, id, callback) {
  let removeSql = "delete from employee where employee_id=?";
  let sql = mysql.format(removeSql, id);

  conn.query(sql, callback);
}

module.exports = { index, create, update, getById, update, remove };
