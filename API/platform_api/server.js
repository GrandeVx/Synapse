const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require("mysql");
 
const app = express();
 
app.use(cors());
// parse application/json
app.use(bodyParser.json());
  
//create database connection4
const conn = mysql.createConnection({
  host: '162.19.3.245',
  user: 'apiuser',
  password: 'ZhbfpwCBbiYNgX4pIteI',
  database: 'synapse'
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
            res.send(results);
        }else{
            res.send('0');
        }
    });

    console.log(query.sql);

}); 


//add new user
app.post('/store-data',(req, res) => {
  let data = {name: req.body.name};
  let sql = "INSERT INTO users SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
app.listen(3100, () => {
  console.log("Server running successfully on 3000");
});