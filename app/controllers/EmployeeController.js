const conn = require("../../config/db");
const Employee = require("../models/Employee");

function index(req, res) {
  conn.getConnection(function (err, connection) {
    if (err) {
      throw err;
    } else {
      Employee.index(connection, function (err, result) {
        if (err) {
          throw err;
        } else {
          // res.json(result);
          res.render("index", { data: result });
          connection.release();
        }
      });
    }
  });
}

function create(req, res) {
  conn.getConnection(function (err, connection) {
    if (err) {
      throw err;
    } else {
      Employee.create(connection, req.body, function (err, result) {
        if (err) {
          throw err;
        } else {
          // res.json(result);
          res.redirect("/employee");
          connection.release();
        }
      });
    }
  });
}

function edit(req, res) {
  conn.getConnection(function (err, connection) {
    if (err) {
      throw err;
    } else {
      Employee.getById(conn, req.params.id, function (err, result) {
        if (err) {
          throw err;
        } else {
          // res.json(result);
          res.render("edit", { data: result[0] });
          connection.release();
        }
      });
    }
  });
}

function update(req, res) {
  conn.getConnection(function (err, connection) {
    if (err) {
      throw err;
    } else {
      Employee.update(conn, req.body, req.params.id, function (err, result) {
        if (err) {
          throw err;
        } else {
          // res.json(result);
          res.redirect("/employee");
          connection.release();
        }
      });
    }
  });
}

function remove(req, res) {
  conn.getConnection(function (err, connection) {
    if (err) {
      throw err;
    } else {
      Employee.remove(conn, req.params.id, function (err, result) {
        if (err) {
          throw err;
        } else {
          // res.json(result);
          res.redirect("/employee");
          connection.release();
        }
      });
    }
  });
}

module.exports = { index, create, update, edit, update, remove };
