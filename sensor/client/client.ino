
#include <SPI.h>
#include <RH_RF95.h>

#define TRIG_PIN 10
#define ECHO_PIN 8

// Singleton instance of the radio driver
RH_RF95 rf95;
float frequency = 868.0;
String seriale = "AFDAMB2";

void setup() 
{
  Serial.begin(9600);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  digitalWrite(TRIG_PIN, LOW);

  Serial.println("Avvio il Client");
  if (!rf95.init())
    Serial.println("Avvio Fallito");

  // Setup Lora frequency  
  rf95.setFrequency(frequency);
  rf95.setTxPower(13);
  rf95.setSpreadingFactor(7);
  rf95.setSignalBandwidth(125000);
  rf95.setCodingRate4(5);
}

void loop()
{
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  unsigned long tempo = pulseIn(ECHO_PIN, HIGH);
  float distanza = 0.03438 * tempo / 2;
  Serial.print("Distanza: " + String(distanza) + " cm \n");

  String randNumber_to_string = String(distanza);
  String sender = randNumber_to_string + "-" + seriale;

  const uint8_t* p = reinterpret_cast<const uint8_t*>(sender.c_str());
  rf95.send(p, 16);
  rf95.waitPacketSent();
  delay(1000);
  // delay(240000);
  
}
