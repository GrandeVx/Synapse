
import json
from time import time
from flask import *

import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

import mysql.connector

from dotenv import dotenv_values
config = dotenv_values(".env")  


mydb = mysql.connector.connect(
  host=config["HOST"],
  user=config["USER"],
  password=config["PASSWORD"],
  database="synapse",
  autocommit=True # <-- il commit permette di avere sempre gli aggiornamenti ad ogni query
)

cred = credentials.Certificate("firebase.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://synapse-4e711-default-rtdb.europe-west1.firebasedatabase.app/'
})
ref = db.reference("/")

app = Flask(__name__)


def alarm():
    print ("ALARM")



@app.route('/',methods=['GET'])
def home_page():
    Timestamp = time()
    data_set = {'Page': 'Home', 'Title': 'Home Page','Message': 'Welcome to the Home Page', 'TimeStamp': Timestamp}
    json_dump = json.dumps(data_set)
    return json_dump


@app.route('/update/',methods=['GET'])
def user_page():
    Timestamp = time()   
    serial_query = str(request.args.get('serial'))
    measure_query = str(request.args.get('measure'))

    if serial_query != "None" and measure_query != "None":

        mycursor = mydb.cursor()
        mycursor.execute("SELECT * FROM sensors_available WHERE sensor_id = %s", (serial_query,))
        myresult = mycursor.fetchall()
        mycursor.close()

        if len(myresult) > 0:

            if (myresult[0][1] != None) :

                if (myresult[0][3] != None):
                    if (int(measure_query) >= int(myresult[0][3])):
                        alarm() # se la misura è maggiore di quella di sicurezza, allarme

                ref = db.reference(serial_query)
                ref.update({
                    'measure': measure_query,
                    'timestamp': Timestamp
                })        

                mycursor = mydb.cursor()
                sql = "INSERT INTO sensors_data (sensor_id, data,timestamp) VALUES (%s,%s,%s)"
                val = (serial_query,measure_query, Timestamp)
                mycursor.execute(sql, val)
                mycursor.close()


            else : 
                return "<h1> [Errore 02] Sensore non Associato a nessun Account </h1>"

        else :
            return "<h1> [Errore 01] Sensore non Registrato Contatta il Fornitore </h1>"

    return "<h1> Operazione Avvenuta con Successo </h1>"


@app.route('/get/',methods=['GET'])
def get_data():
    with open('./data.json', 'r') as f:
        data = f.read()
    return data


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=7777)

