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
    user_query = str(request.args.get('serial'))
    age_query = str(request.args.get('measure'))

    if user_query != "None" and age_query != "None":
        data_set = {'Message': f'Benvenuto nella pagina di {user_query} che ha {age_query} Anni!!', 'TimeStamp':Timestamp, 'Status': 'OK'}
    
    else :
        data_set = {'Message': f'Uno dei parametri fondamentali non e stato dichiarato', 'TimeStamp':Timestamp, 'Status': 'ERROR'}

    json_dump = json.dumps(data_set)
    return json_dump

if __name__ == '__main__':
    app.run(debug=True,port=7777)
