from this import d
import RPi.GPIO as GPIO
import time

TRIG = 11
ECHO = 12

def Server_Communication(distance):
    #TODO
    pass

def setup():
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(TRIG,GPIO.OUT) # TRIG -> Sensore che invia il segnale [x] [ ]
    GPIO.setup(ECHO,GPIO.IN) # ECHO -> Sensore che riceve il segnale [ ] [x]
 
def distance():
    
    GPIO.output(TRIG,0) # Reset del sensore 
    time.sleep(0.000002)
    GPIO.output(TRIG,1) # Andiamo a settare il valore della porta ad 1 / HIGH
    time.sleep(0.000001)
    GPIO.output(TRIG,0) # Andiamo a settare il valore della porta ad 0 / LOW

    while GPIO.input(ECHO) == 0: # Se ECHO = 0 -> Il sensore sta inviando un segnale
        a = 0
    time1 = time.time() # Tempo iniziale

    while GPIO.input(ECHO) == 1: # Se ECHO = 1 -> Il sensore ha ricevuto il segnale di ritorno
        a = 1
    time2 = time.time() # Tempo finale

    during = time2 - time1
    # Calcolo della distanza
    return during * 340 / 2 * 100

def loop():
    while True:
        dis = int(distance()) # Acquisione Distanza -> int 
        print("Distanza: %d cm" % dis)
        time.sleep(10) # Attesa per 10 secondi


def destroy():
    GPIO.cleanup()

if __name__ == "__main__":
    setup()
    try:
        loop()
    except KeyboardInterrupt:
        destroy()

