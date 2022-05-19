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

    let sql = `SELECT * FROM users WHERE email = '${data}' AND password = '${data2}'`;

    let query = conn.query(sql, (err, results) => {
        if(err) throw err;

        if(results.length > 0){
            return res.send({code: 200, message: 'Login Successful', data: {identifier: results[0].username}});
        }
        else{
            return res.send({code: 404, message: 'Login Failed'});
        }
    });



}); 

app.post('/register', (req, res) => {

    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;


    let sql = `SELECT * FROM users WHERE username = '${username}' OR email = '${email}'`;

        conn.query(sql, (err, results) => {
        if(err) throw err;
        if(results.length > 0){
            return res.send({code: 100, message: 'Username già esistente'});  
        }else{
          let sql = `INSERT INTO users (email, password, username) VALUES ('${email}', '${password}', '${username}')`;
          let query = conn.query(sql, (err, results) => {
              if(err) throw err;
              return res.send({code: 200, message: 'Registrazione Avvenuta'});
          });
        }

    });

    return;

});


app.post('/getSensor', (req, res) => {
    
  let data = req.body.username;

  console.log(data)

  let sql = `SELECT sensor_id , name , description , location FROM sensors_available WHERE username = '${data}'`;
  conn.query(sql, (err, sensors) => {
      if(err) throw err;
      if(sensors.length > 0){
        let tmp = []
        sensors.map((sensor, index) => {
        
            let sql = `SELECT * FROM sensors_data WHERE sensor_id = '${sensor.sensor_id}'`;
            conn.query(sql, (err, sensors_data) => {
                if(err) throw err;
                if(sensors_data.length > 0){
                    tmp.push(sensors_data)
                }
            });       
        });
        return res.send({code: 200, message: 'Sensori Trovati', data: {sensors : sensors, sensors_datas: tmp }});

      }else{
          return res.send({code: 404, message: 'Nessun Sensore Trovato'});
      }
  });

  return;

}); 

app.post('/getSensorData', (req, res) => {
    let sensor_id = req.body.sensor_id;

    let sql = `SELECT * FROM sensors_data WHERE sensor_id = '${sensor_id}'`;
    conn.query(sql, (err, results) => {
        if(err) throw err;
        if(results.length > 0){
            return res.send({code: 200, message: 'Dati Sensore Trovati', data: {sensor_data : results}});
        }else{
           return res.send({code: 404, message: 'Nessun Dato Trovato'});
        }
    });
});
 

app.post('/addSensor', (req, res) => {

    let user = req.body.username;
    let id = req.body.id;
    let nome = req.body.nome;
    let descrizione = req.body.descrizione;
    let altezza = req.body.altezza;


    let sql = `SELECT sensor_id , username FROM sensors_available WHERE sensor_id = '${id}'`;

    conn.query(sql, (err, results) => {
        if(err) throw err;
        if(results.length > 0){
            if (results[0].username == '') {
            
                let sql = `UPDATE sensors_available SET username = '${user}' ,name = '${nome}' ,description = '${descrizione}' ,alarm_height='${altezza}' WHERE sensor_id = '${id}'`;
                conn.query(sql, (err, results) => {
                    if(err) throw err;
                    return res.send({code: 200, message: 'Aggiornamento Avvenuto'});
                    return;
                });

            } 
            
        }else{
            return res.send({code: 100, message: 'Sensore Non Registrato sulla Piattaforma'});  
        }
    });



})



app.listen(3002, () => {
  console.log("Server running successfully on 3000");
});