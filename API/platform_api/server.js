const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require("mysql");
require('dotenv').config();

const app = express();
 
app.use(cors());
// parse application/json
app.use(bodyParser.json());
  
//create database connection4
const conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
app.post('/login', (req, res) => {
    
    let data = req.body.email;
    let data2 = req.body.password;
    
    console.log(data)

    let sql = `SELECT * FROM users WHERE email = '${data}' AND password = '${data2}'`;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        if(results.length > 0){
            console.log(results);
            res.send({code: 200, message: 'Login Successful', data: {identifier: results[0].username}});
        }else{
            res.send({code: 404, message: 'Login Failed'});
        }
    });
    console.log(query.sql);

}); 

app.post('/register', (req, res) => {

    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;


    let sql = `SELECT * FROM users WHERE username = '${username}'`;

    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        if(results.length > 0){
            res.send({code: 100, message: 'Username già esistente'});  
        }else{
          let sql = `INSERT INTO users (email, password, username) VALUES ('${email}', '${password}', '${username}')`;
          let query = conn.query(sql, (err, results) => {
              if(err) throw err;
              res.send({code: 200, message: 'Registrazione Avvenuta'});
          });
        }

    });

});

app.post('/store-data',(req, res) => {
  let data = {name: req.body.name};
  let sql = "INSERT INTO users SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
app.listen(3002, () => {
  console.log("Server running successfully on 3000");
});