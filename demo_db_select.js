var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mukesh",
  database: "mydb1"
});

con.connect(function(err) {
  if (err) throw err;
  var sql="select name, address from customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});