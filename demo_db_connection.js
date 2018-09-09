var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mukesh"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sqlDatabase="create database mydb1";
  con.query(sqlDatabase,function(err,result){
	  if(err) throw err;
	  console.log("Database created!");
  });
});