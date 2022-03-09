import json
from pydoc import cli
import paho.mqtt.client as mqtt

def on_message(client, userdata, message):
    """ Funzione dedita alle operazione di archiviazione dei dati all'arrivo di un messaggio """
    data = json.dump(message)
    print(data)
    

if __name__ == "__main__":
    client = mqtt.Client() # Creazione Client
    client.on_message = on_message # Funzione dedita alle operazione di archiviazione dei dati all'arrivo di un messaggio
    client.connect("localhost", 1883, 60) # connessione al broker
    client.subscribe("sensors") # Sottoscrizione al topic "sensors"
    client.loop_forever() # In questo modo il programma resta in ascolto delle comunicazioni