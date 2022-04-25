import json
from time import time
from flask import *
app = Flask(__name__)

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
        data_set = {'seriale': serial_query, 'measure': measure_query, 'TimeStamp': Timestamp}
        json_dump_for_save = json.dumps(data_set)
        with open('./data.json', 'a') as f:
            f.write(json_dump_for_save)
            f.write('\n')
        data_set = {'Message': f'Informazione Archiviata', 'TimeStamp':Timestamp, 'Status': 'OK'}
    else :
        data_set = {'Message': f'Uno dei parametri fondamentali non e stato dichiarato', 'TimeStamp':Timestamp, 'Status': 'ERROR'}

    json_dump = json.dumps(data_set)
    return json_dump

@app.route('/get/',methods=['GET'])
def get_data():
    with open('./data.json', 'r') as f:
        data = f.read()
    return data


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=7777)
