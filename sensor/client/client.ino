/*
  LoRa Simple Client for Arduino :
  Support Devices: LoRa Shield + Arduino 
  
  Example sketch showing how to create a simple messageing client, 
  with the RH_RF95 class. RH_RF95 class does not provide for addressing or
  reliability, so you should only use RH_RF95 if you do not need the higher
  level messaging abilities.

  It is designed to work with the other example LoRa Simple Server
  User need to use the modified RadioHead library from:
  https://github.com/dragino/RadioHead

  modified 16 11 2016
  by Edwin Chen <support@dragino.com>
  Dragino Technology Co., Limited
*/

#include <SPI.h>
#include <RH_RF95.h>

#define TRIG_PIN 10
#define ECHO_PIN 9

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
  
  int randNumber = random(3,20);
  String randNumber_to_string = String(randNumber);
  String sender = randNumber_to_string + "-" + seriale;
  Serial.println(sender);
  const uint8_t* p = reinterpret_cast<const uint8_t*>(sender.c_str());
  rf95.send(p, 16);
  rf95.waitPacketSent();
  delay(1000);
  // delay(240000);
  
}
